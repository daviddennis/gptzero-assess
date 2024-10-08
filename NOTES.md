## 2 Weeks time improvements
1. `Code Quality`
    - For a simple system like this, the code quality seems adequate, I wouldn't change a lot if few new features were being added.
    - Add a few descriptive comments
2. `UX`
    - The interface is very simple, and even the "Send" button doesn't light up. 
    - Maybe try to add saved previous conversations.
    - The prompt textbox starting as one line, and resizing based on what's being typed
    - I would address little issues like "Links" not going anywhere
    - Too much spacing around prompt request, LLM response divs, making scrolling onerous. Also maybe a smaller font is needed
3. `Performance`
    - Perhaps the BE should send escaped RRML messages to the FE, where un-escaping & conversion of RRML tags to HTML tags can happen on the client, negating the need for the BE to convert from RRML to HTML entirely.
4. `Scalability`
    - Load Balancing for requests
    - Dockerize LLM, BE, and FE services, and deploy with Kubernetes
    - LLM model needs to be fleshed out, with scalable datastore options explored for saved conversations


## Unclear Instructions
Separately, I spoke with Alex about the miscommunication that can occur when applicants download this excercise, not realizing until reading the README that it's timed from the point of download.