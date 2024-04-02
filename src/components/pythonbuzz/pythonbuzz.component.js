loadTag('headTag');

window.buzzText = `Python Buzz <br/><button class="btn btn-warning fastHand-font start-game-btn"
onclick='briefing()'>
<h1>Start Game</h1>
</button>`;

function sp(text) {
    $('.btext').scrollTop(0);
    /*document.getElementById("my_audio").volume = getVolume;
    if (audioElement) {
        audioElement.play();
    } else {
        console.error("Audio element not found.");
    }*/
    $(".start-game-btn").hide();
    window.buzzText = text;
    updateVariable('buzzText', buzzText);
    // Check if the browser supports the SpeechSynthesis API
}

function mute() {
    var audioElement = document.getElementById("my_audio");
    document.getElementById("my_audio").volume = 0;
    localStorage.setItem("audio", "0");
}

function unmute() {
    var audioElement = document.getElementById("my_audio");
    document.getElementById("my_audio").volume = 0.1;
    localStorage.setItem("audio", "0.1");
}

document.addEventListener("load", function (e) {
    sp();
});



function briefing() {
    sp(`<div class="row pop-font"><div class="col-lg-12 "><span class="text-white">Hi Intern. </span> We are <span class="text-white">Python Buzzers</span> and we protect our <span class="text-white">Solar System</span> from <span class="text-white">XenoBugs</span>. You are hired as a <span class="text-white">Developer</span>. Ready to Learn?</div><div class="col-lg-12"> <button class="btn btn-warning" onclick="training()"><h1>Click Here to Start Training</h1></button></div></div>`);
}

function training() {
    sp(`<div class="row pop-font"><div class="col-lg-12 ">Intern! Before writing python code we need to learn how to Install and Execute it. To Execute we simply write <span class="text-white text-lowercase"> python filename.py</span><div> Okay, time for first Mission.<div class="col-lg-12"> <button class="btn btn-warning" onclick="mission1()"><h1>Click Here to Start First Mission</h1></button></div></div>`)
}

function mission1() {
    sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Mr. X12, our brave soldier captured a destructive microbial sphere that can destroy our whole solar system. Your task is to unlock it to Destroy it. You need to <span class="text-white"> run python code execute.py in textbox at right</span> to unlock Sphere.
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="col-lg-12">
                        <form class="d-flex m-0">
                            <input class="form-control me-2" id="execute" type="Write a code" placeholder="Execution Console" aria-label="Search">
                            <button class="btn btn-warning" onclick="executeProgram()" type="button">Execute Program</button>
                        </form>
                    </div>
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
    `);
}

function basics() {
    sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-12">
                You did an Amazing Work Saving Solar System Intern. Your Next task is to understand how we write <span class="text-white">comments in python</span>, <span class="text-white">Python Variables</span> and <span class="text-white">Data Types in Python</span>. Be Motivated, several Missions are coming.
            <div>
            <div class="col-lg-12">
                <button class="btn btn-warning" onclick="comments()"><h1>Click Here to Learn How to Write Comments in Python</h1></button>
            </div>
        </div>
    `);
}


function comments() {
    sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-12">
                Comments in Python are of Two Types:  <span class="text-white">Single Line Comments</span> and <span class="text-white"> Multi Line Comments</span>.
            <div>
            <div class="col-lg-12 mt-2 pt-2">
                <br/>
                <div class="text-white">Single Line Comments:  </div><br/>
                <h2>Single line comments are written via <span class="text-white">#</span> symbol<br/><br/>.
                Example. <br/>
                <div class="perfect-center text-left">
                    <pre style="text-align:left !important">
<code class="text-left">
<span class="text-success">#this is a sample comment</span>
<span class="text-white text-lowercase">print("Hello World")</span>
</code>
                    </pre>
                </div></h2>
            <div>
            <div class="col-lg-12">
                <br/>
                <div class="text-white">Multi Line Comments:  </div><br/>
                <h2>Multi line comments are written via Triple<span class="text-white">''' at Start and End</span> symbol<br/><br/>
                Example. <br/>
                <div class="perfect-center text-left">
                    <pre style="text-align:left !important;margin: 0px">
<code class="text-left">
<span class="text-success">'''this is a sample Multiline comment'''</span>
<span class="text-white text-lowercase">print("Hello World")</span>
</code>
                    </pre>
                </div></h2>
            <div>
            <div class="col-lg-12">
                <button class="btn btn-warning" onclick="mission2()"><h1>Click Here For Second Mission</h1></button>
            </div>
        </div>
    `);
}

function mission2() {
    sp(`
    <div class="row pop-font normal-text planet1">
    <div class="col-lg-6 planet-text">
        XenoBugs are widely spread accross pyramid Xeon-333. Uncomment Above code to check the current status.
    </div>
    <div class="col-lg-6">
        <div class="myplanet row">
            <div class="col-lg-12">
                <form class="d-flex m-0">
                    <input class="form-control me-2" id="mountain" value="#Unlock pyramid Xeon-333" type="Write a code" placeholder="Execution Console" aria-label="Search">
                    <button class="btn btn-warning" onclick="executeMountain()" type="button">Execute Program</button>
                </form>
            </div>
            <div class="planet col-lg-12"></div>
        </div>
    </div>
</div>
    `);
}

function mission1destroy() {
    sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Great job. Destructive Microbial sphere is now Destroyed
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
        <script>
        </script>
    `);
    destroy('aaa');
}

function executeProgram() {
    var inputValue = document.getElementById('execute').value;
    planet(inputValue);
}

function executeMountain() {
    var inputValue = document.getElementById('mountain').value;
    mountain(inputValue);
}

function destroyProgram() {
    destroy(inputValue);
}

function mountain(answer) {
    if (answer.toLowerCase() === 'unlock pyramid xeon-333') {
        const myplanetDiv = document.querySelector('.myplanet');

        if (myplanetDiv) {
            const myplanetDiv = document.querySelector('.myplanet');

            if (myplanetDiv) {
                const script = document.createElement('script');
                script.src = 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.min.js';
                script.onload = function () {
                    // Set up scene
                    const scene = new THREE.Scene();

                    // Set up camera
                    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                    camera.position.z = 5;

                    // Set up renderer
                    const renderer = new THREE.WebGLRenderer({ alpha: true });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    document.querySelector('.myplanet').appendChild(renderer.domElement);

                    // Create a pyramid
                    const textureLoader = new THREE.TextureLoader();
                    const texture = textureLoader.load('src/static/archive/gs.jpg'); // Replace with the actual path to your texture
                    const pyramidGeometry = new THREE.ConeGeometry(3, 2, 4); // Replace with ConeGeometry
                    const pyramidMaterial = new THREE.MeshPhongMaterial({
                        map: texture, // You can change the color
                        shininess: 30,
                        specular: 0x050505,
                    });
                    const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
                    scene.add(pyramidMesh);

                    // Add ambient light
                    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                    scene.add(ambientLight);

                    // Add directional light
                    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                    directionalLight.position.set(5, 3, 5);
                    scene.add(directionalLight);

                    // Animation function
                    const animate = () => {
                        requestAnimationFrame(animate);

                        // Rotate the pyramid
                        pyramidMesh.rotation.y += 0.005;

                        renderer.render(scene, camera);
                    };

                    // Handle window resize
                    window.addEventListener('resize', () => {
                        const newWidth = window.innerWidth;
                        const newHeight = window.innerHeight;

                        camera.aspect = newWidth / newHeight;
                        camera.updateProjectionMatrix();

                        renderer.setSize(newWidth, newHeight);
                    });

                    // Start the animation
                    animate();
                };

                document.head.appendChild(script);
            }
            $(".planet-text").html(`Great Job but its already in control of Xenobugs. Soforth it is green. Multicomment above code to take back control`);
            speechSynthesis.cancel();
            if ('speechSynthesis' in window) {
                // Create a new SpeechSynthesisUtterance instance
                var utterance = new SpeechSynthesisUtterance("Great Job but its already in control of Xenobugs. Soforth it is green. Multicomment above code to take back control");

                // Use the SpeechSynthesis API to speak the text
                window.speechSynthesis.speak(utterance);
            } else {
                // Handle the case where the browser does not support the SpeechSynthesis API
                alert('Speech synthesis is not supported in this browser.');
            }
        }
    } else if (answer.toLowerCase() === "'''unlock pyramid xeon-333'''") {
        normalPyramid();
    } else {
        sp(`
    <div class="row pop-font normal-text planet1">
    <div class="col-lg-6 planet-text">
        Nope. Read Again How to comment and Uncomment Python code. Or Try Again
        <button class="btn btn-warning" onclick="comments()">Click Here to Read Comments Again</button>
    </div>
    <div class="col-lg-6">
        <div class="myplanet row">
            <div class="col-lg-12">
                <form class="d-flex m-0">
                    <input class="form-control me-2" id="mountain" value="#Unlock pyramid Xeon-333" type="Write a code" placeholder="Execution Console" aria-label="Search">
                    <button class="btn btn-warning" onclick="executeMountain()" type="button">Execute Program</button>
                </form>
            </div>
            <div class="planet col-lg-12"></div>
        </div>
    </div>
</div>
    `);
    }
}

function normalPyramid() {
    sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Great job. Pyramid Xeon-333 is under our control. You are so far doing Great Job.
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
        <script>
        </script>
    `);
    pyramidControl('aaa');
}

function pythonVariables() {
    sp(`
        <div class="row planet1">
            <div class="col-lg-6 row pop-font  normal-text">
                <div class="col-lg-12">
                    Intern!. Python Variables can be defined in Format <span class="text-white">variableName = "Variable Value"</span> , <span class="text-white">variableName = 4</span> or <span class="text-white">variableName = True</span>. Python Variables are case sensitive. <br/>
                    <br/><br/><span class="text-white">A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).</span> Rules for Python variables:
                    <ol>
                        <li class="text-capitalize text-left" style="text-align: left">A variable name must start with a letter or the underscore character</li>
                        <li class="text-capitalize text-left" style="text-align: left">A variable name cannot start with a number</li>
                        <li class="text-capitalize text-left" style="text-align: left">A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
                        <li class="text-capitalize text-left" style="text-align: left">Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
                        <li class="text-capitalize text-left" style="text-align: left">A variable name cannot be any of the Python keywords.</li>
                    </ol>
                </div>
                <div class="col-lg-12">
                    <h3 class="text-white">Below is the list of some valid variable names</h3>
                    <ol>
                        <li class="text-capitalize text-left">variable_name = 42</li>
                        <li class="text-capitalize text-left">my_variable = "Hello"</li>
                        <li class="text-capitalize text-left">_count = 10</li>
                        <li class="text-capitalize text-left">MAX_SIZE = 100</li>
                    </ol>
                </div>
            </div>
            <div class="col-lg-6 row m-0 p-0">
                <button class="btn btn-warning" onclick="mission3()">Click Here for Mission 3</button>
            </div>
        </div>
        <script>
        </script>
    `);
    pyramidControl('aaa');
}

function mission3() {
    sp(`
    <div class="row pop-font normal-text planet1">
    <div class="col-lg-6 planet-text">
        Bad News, Intern!. Xenobugs Attacked Sector X Yesterday. They modified chamber code that caused gas leak. Define a variable called <span class="text-white">sectorX</span> and assign a string value <span class="text-white">show</span> to load current condition of Sector X here.
    </div>
    <div class="col-lg-6">
        <div class="myplanet row">
            <div class="col-lg-12">
                <form class="d-flex m-0">
                    <input class="form-control me-2" id="chamber" value="" type="Write a code" placeholder="Execution Console" aria-label="Search">
                    <button class="btn btn-warning" onclick="executeChamber()" type="button">Execute Program</button>
                </form>
            </div>
            <div class="planet col-lg-12"></div>
        </div>
    </div>
</div>
    `);
}

function executeChamber() {
    var inputValue = document.getElementById('chamber').value;
    chamber(inputValue);
}

function chamber(value) {
    alert(value.toLowerCase().trim().split(" ").join(""));
    console.log("Lowercased and trimmed value:", value.toLowerCase().trim().split(" ").join(""));
    console.log('sectorx="show"', 'sectorx=\'show\'');
    if (value.toLowerCase().trim().split(" ").join("") === 'sectorx="show"' || value.toLowerCase().trim().split(" ").join("") === "sectorx='show'") {
        alert("ddd" + value);

        // Dynamically create script element
        const script = document.createElement('script');
        script.src = 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.min.js';
        script.onload = function () {
            const scene = new THREE.Scene();

            // Set up camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Set up renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.querySelector('.myplanet').appendChild(renderer.domElement);

            // Create a pyramid
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('src/static/archive/xenobug.png'); // Replace with the actual path to your texture
            const pyramidGeometry = new THREE.BoxGeometry(3, 32, 34); // Replace with ConeGeometry
            const pyramidMaterial = new THREE.MeshPhongMaterial({
                map: texture, // You can change the color
                shininess: 30,
                specular: 0x050505,
            });
            const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
            scene.add(pyramidMesh);

            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // Add directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);

            // Animation function
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate the pyramid
                pyramidMesh.rotation.y += 0.005;

                renderer.render(scene, camera);
            };

            // Handle window resize
            window.addEventListener('resize', () => {
                const newWidth = window.innerWidth;
                const newHeight = window.innerHeight - 7000;

                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();

                renderer.setSize(newWidth, newHeight);
            });

            // Start the animation
            animate();
        };
        // Append the script to the document
        document.head.appendChild(script);
    } else {
        alert("Condition is false")
    }


}

function pyramidControl(aaa) {
    const script = document.createElement('script');
    script.src = 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.min.js';
    script.onload = function () {
        // Set up scene
        const scene = new THREE.Scene();

        // Set up camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('.myplanet').appendChild(renderer.domElement);

        // Create a pyramid
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('src/static/archive/ns.jpg'); // Replace with the actual path to your texture
        const pyramidGeometry = new THREE.ConeGeometry(3, 2, 4); // Replace with ConeGeometry
        const pyramidMaterial = new THREE.MeshPhongMaterial({
            map: texture, // You can change the color
            shininess: 30,
            specular: 0x050505,
        });
        const pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
        scene.add(pyramidMesh);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the pyramid
            pyramidMesh.rotation.y += 0.005;

            renderer.render(scene, camera);
        };

        // Handle window resize
        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        });

        // Start the animation
        animate();
    };

    document.head.appendChild(script);
}

let destroyFlag = 0;
function planet(answer) {
    if (answer.toLowerCase() === 'python execute.py') {
        destroyFlag = 1;
        const myplanetDiv = document.querySelector('.myplanet');

        if (myplanetDiv) {
            const myplanetDiv = document.querySelector('.myplanet');

            if (myplanetDiv) {
                const script = document.createElement('script');
                script.src = 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.min.js';
                script.onload = function () {
                    // Create a scene
                    const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera(75, myplanetDiv.clientWidth / myplanetDiv.clientHeight, 0.1, 1000);
                    camera.position.z = 50;

                    // Set alpha to true for a transparent background
                    const renderer = new THREE.WebGLRenderer({ alpha: true });
                    renderer.setSize(myplanetDiv.clientWidth, myplanetDiv.clientHeight);

                    // Set clearColor to transparent
                    renderer.setClearColor(0x000000, 0);

                    myplanetDiv.appendChild(renderer.domElement);

                    // Load texture
                    const textureLoader = new THREE.TextureLoader();
                    const texture = textureLoader.load('src/static/archive/texture.jpg'); // Replace with the actual path to your texture

                    const geometry = new THREE.SphereGeometry(15, 32, 16);
                    const material = new THREE.MeshBasicMaterial({
                        map: texture, // Apply the texture to the material
                        transparent: true,
                        opacity: 1 // Adjust the opacity as needed
                    });
                    const sphere = new THREE.Mesh(geometry, material);
                    scene.add(sphere);

                    function animate() {
                        requestAnimationFrame(animate);

                        sphere.rotation.x += 0.01;
                        sphere.rotation.y += 0.01;

                        renderer.render(scene, camera);
                    }

                    animate();
                };

                document.head.appendChild(script);
            }
            $(".planet-text").html(`Great Job. Destructive Microbial Sphere is Unlocked. Now type execute <span class="text-white text-lowercase">destroy.py</span> to destroy it`);
            speechSynthesis.cancel();
            if ('speechSynthesis' in window) {
                // Create a new SpeechSynthesisUtterance instance
                var utterance = new SpeechSynthesisUtterance("Great Job. Destructive Microbial Sphere is Unlocked. Now execute destroy.py to destroy it");

                // Use the SpeechSynthesis API to speak the text
                window.speechSynthesis.speak(utterance);
            } else {
                // Handle the case where the browser does not support the SpeechSynthesis API
                alert('Speech synthesis is not supported in this browser.');
            }
        }
    } else if (answer.toLowerCase() === 'python destroy.py') {
        if (destroyFlag !== 0) {
            mission1destroy();
        } else {
            sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Nope, I guess you need to try again. Type <div class="text-white text-lowercase">python execute.py</div> to Execute the microbial sphere.
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="col-lg-12">
                        <form class="d-flex m-0">
                            <input class="form-control me-2" id="execute" type="Write a code" placeholder="Execution Console" aria-label="Search">
                            <button class="btn btn-warning" onclick="executeProgram()" type="button">Execute Program</button>
                        </form>
                    </div>
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
        `)
        }
    } else {
        if (destroyFlag === 0) {
            sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Nope, I guess you need to try again. Type <div class="text-white text-lowercase">python execute.py</div> to Execute the microbial sphere.
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="col-lg-12">
                        <form class="d-flex m-0">
                            <input class="form-control me-2" id="execute" type="Write a code" placeholder="Execution Console" aria-label="Search">
                            <button class="btn btn-warning" onclick="executeProgram()" type="button">Execute Program</button>
                        </form>
                    </div>
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
        `)
        } else {
            sp(`
        <div class="row pop-font normal-text planet1">
            <div class="col-lg-6 planet-text">
                Nope, I guess you need to try again. Type <div class="text-white text-lowercase">python destroy.py</div> to Destroy the microbial sphere.
            </div>
            <div class="col-lg-6">
                <div class="myplanet row">
                    <div class="col-lg-12">
                        <form class="d-flex m-0">
                            <input class="form-control me-2" id="execute" type="Write a code" placeholder="Execution Console" aria-label="Search">
                            <button class="btn btn-warning" onclick="executeProgram()" type="button">Execute Program</button>
                        </form>
                    </div>
                    <div class="planet col-lg-12"></div>
                </div>
            </div>
        </div>
        `)
        }
    }
}


function destroy(answer) {
    const myplanetDiv = document.querySelector('.myplanet');

    if (myplanetDiv) {
        const script = document.createElement('script');
        script.src = 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.min.js';
        script.onload = function () {
            // Create a scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, myplanetDiv.clientWidth / myplanetDiv.clientHeight, 0.1, 1000);
            camera.position.z = 50;

            // Set alpha to true for a transparent background
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(myplanetDiv.clientWidth, myplanetDiv.clientHeight);

            // Set clearColor to transparent
            renderer.setClearColor(0x000000, 0);

            myplanetDiv.appendChild(renderer.domElement);

            // Load texture
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('src/static/archive/break.png'); // Replace with the actual path to your texture

            const geometry = new THREE.SphereGeometry(15, 32, 16);
            const material = new THREE.MeshBasicMaterial({
                map: texture, // Apply the texture to the material
                transparent: true,
                opacity: 1 // Adjust the opacity as needed
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            function animate() {
                requestAnimationFrame(animate);

                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                renderer.render(scene, camera);
            }

            animate();
        };

        document.head.appendChild(script);
    }
    $(".planet-text").html(`Great Job. Destructive Microbial Sphere is now Destroyed. You Passed. <button class="btn btn-warning" onclick="basics()">Click Below to Learn More about Python Basics</button>`);
    speechSynthesis.cancel();
    if ('speechSynthesis' in window) {
        // Create a new SpeechSynthesisUtterance instance
        var utterance = new SpeechSynthesisUtterance("Great Job. Destructive Microbial Sphere is now Destroyed. You Passed. Click Below to Learn More about Python Basics");

        // Use the SpeechSynthesis API to speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        // Handle the case where the browser does not support the SpeechSynthesis API
        alert('Speech synthesis is not supported in this browser.');
    }

}



/***********************Write all JS above this ******************/
updateHtml()
