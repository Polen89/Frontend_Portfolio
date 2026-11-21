const dateElement = document.getElementById('current-date');

function updateDate() {
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateElement.dateTime = `${year}-${month}-${day}`;
}

updateDate();
setInterval(updateDate, 60_000);

const taskCheckboxes = [...document.querySelectorAll('.task-list input[type="checkbox"]')];

function updateTaskSummary() {
    const completed = taskCheckboxes.filter(checkbox => checkbox.checked).length;
    const remaining = taskCheckboxes.length - completed;
    document.getElementById('open-task-count').textContent = remaining;
    document.getElementById('nav-task-count').textContent = remaining;
    document.getElementById('task-status').textContent = `${remaining} remaining`;
    document.getElementById('completion-label').textContent = `${completed} of ${taskCheckboxes.length} complete`;
    document.getElementById('task-progress').max = taskCheckboxes.length;
    document.getElementById('task-progress').value = completed;
}

taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateTaskSummary));
updateTaskSummary();
