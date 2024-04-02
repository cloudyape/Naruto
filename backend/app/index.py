import json
import os
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials


def load_chat_rule():
    current_directory = os.path.dirname(os.path.realpath(__file__))
    json_path = os.path.join(current_directory, "train.json")

    try:
        with open(json_path, "r") as file:
            chat_rule = json.load(file)
            return chat_rule.get("rules", [])
    except FileNotFoundError:
        return []


def get_response(user_input, rules):
    responses = []
    for rule in rules:
        if rule["input"] in user_input.lower():
            responses = rule["response"]
    if not responses:
        responses = "I'm sorry, I don't understand that."
    return responses


def handle_api_request(path, payload=None):
    # Handle API requests here
    if path == "/api/data":
        if payload:
            rules = load_chat_rule()
            # Assuming payload is in JSON format
            data = json.loads(payload)
            response = get_response(data["bla"], rules)
            return {"message": response}
        else:
            return {"error": "Payload is missing"}
    elif path == "/api/yt":
        return retrieveYoutubeVideos()
    if path == "/api/syt":
        if payload:
            # Assuming payload is in JSON format
            data = json.loads(payload)
            response = search_channel_videos("UCEC7bGpdWLvfnTjie48jn5w", data["query"])
            return response
        else:
            response = search_channel_videos("UCEC7bGpdWLvfnTjie48jn5w", "")
            return response
    else:
        return {"error": "Endpoint not found"}


def retrieveYoutubeVideos():

    # Replace 'YOUR_API_KEY' with your actual API key
    API_KEY = "AIzaSyAOi9P5mF1RN9JxqKNkzoJPOLD9o14Zlqs"

    # Replace 'CHANNEL_ID' with the ID of the YouTube channel
    CHANNEL_ID = "UCEC7bGpdWLvfnTjie48jn5w"
    videoArray = []
    videos = get_all_videos(API_KEY, CHANNEL_ID)

    for video_id, title in videos:
        videoArray.append({"videoId": video_id, "title": title})
    return videoArray

def search_channel_videos(channel_id, query):
    # Replace 'YOUR_API_KEY' with your actual API key
    API_KEY = "AIzaSyAOi9P5mF1RN9JxqKNkzoJPOLD9o14Zlqs"
    youtube = build('youtube', 'v3', developerKey=API_KEY)

    # Search for videos from the specified channel
    search_response = youtube.search().list(
        q=query,
        channelId=channel_id,
        type='video',
        part='id,snippet',
        maxResults=10
    ).execute()

    # Extract video information from the search response
    videos = []
    for search_result in search_response.get('items', []):
        videos.append({
            'title': search_result['snippet']['title'],
            'video_id': search_result['id']['videoId']
        })

    return videos

def get_all_videos(api_key, channel_id):
    youtube = build("youtube", "v3", developerKey=api_key)
    videos = []
    next_page_token = None

    while True:
        request = youtube.search().list(
            part="snippet",
            channelId=channel_id,
            maxResults=50,
            pageToken=next_page_token,
        )
        response = request.execute()

        videos.extend(
            [
                (item["id"]["videoId"], item["snippet"]["title"])
                for item in response["items"]
                if item["id"]["kind"] == "youtube#video"
            ]
        )

        next_page_token = response.get("nextPageToken")

        if not next_page_token:
            break

    return videos
