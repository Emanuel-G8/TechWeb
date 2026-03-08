document.addEventListener('DOMContentLoaded', () => {
    fetch('data/resources.json')
        .then(res => res.json())
        .then(data => {
            const allList = document.getElementById('resource-list');
            const studyList = document.getElementById('filter-results');

            allList.innerHTML = '';
            studyList.innerHTML = '';

            data.forEach(item => {
                allList.innerHTML += `<li><strong>${item.name}</strong><br>Type: ${item.type}<br>Location: ${item.location}<br>Hours: ${item.program}<br>Tags: ${item.tags.join(', ')}</li>`;
            });

            const studyItems = data.filter(item => item.type.toLowerCase() === 'study');
            
            if (studyItems.length) {
                studyItems.forEach(item => {
                    studyList.innerHTML += `<li><strong>${item.name}</strong><br>Type: ${item.type}<br>Location: ${item.location}<br>Hours: ${item.program}<br>Tags: ${item.tags.join(', ')}</li>`;
                });
            } else {
                studyList.innerHTML = '<li>No study items found</li>';
            }
        })
        .catch(() => {
            document.getElementById('resource-list').innerHTML = '<li>Error loading resources</li>';
            document.getElementById('filter-results').innerHTML = '<li>Error loading resources</li>';
        });
});