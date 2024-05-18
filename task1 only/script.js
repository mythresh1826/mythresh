<script>
    document.addEventListener('DOMContentLoaded', function() {
        fetch('https://coding-week-2024-api.onrender.com/api/data')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.data-container');
                data.forEach(item => {
                    const box = document.createElement('div');
                    box.classList.add('data-box');

                    const img = document.createElement('img');
                    img.src = item.image; // Assuming 'image' is the property in the API data
                    img.alt = item.title; // Assuming 'title' is the property in the API data

                    const content = document.createElement('div');
                    content.textContent = item.content; // Assuming 'content' is the property in the API data

                    box.appendChild(img);
                    box.appendChild(content);
                    container.appendChild(box);
                });
            })
            .catch(error => console.error('Error fetching data:', error))
    });
</script>
