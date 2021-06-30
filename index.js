//parent elements to store card
const taskContainer = document.querySelector(".task__container")

// Global Store
let globalStore = [];

const newCard = ( {
    id,
    imageUrl,
    taskTitle,
    taskDescription,
    taskType,
}) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" id=${id} class="btn btn-outline-success" onclick="editCard.apply(this, arguments)">
            <i class="fas fa-pencil-alt" id=${id} onclick="editCard.apply(this, arguments)"></i>
        </button>
        <button type="button" class="btn btn-outline-danger">
            <i class="fas fa-trash"></i>
        </button>
    </div>
    <img 
        src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=" 
        class="card-img-top"
        alt="..."
        />
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <span class="badge bg-primary">Amazing</span>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">
            Open Task
        </button>
    </div>
</div>
</div>`;

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,  //unique number for card id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
    //parent object browser -> window
    //parent object html -> DOM -> document

    const createNewCard = newCard(taskData);

    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
};