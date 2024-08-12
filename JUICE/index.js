document.getElementById('update-featured').addEventListener('click', () => {
    const juices = [
        'Pineapple Paradise: Sweet and tropical, perfect for summer.',
        'Berry Blast: A mix of the juiciest berries for a burst of flavor.',
        'Watermelon Wonder: Refreshing and hydrating with a hint of mint.'
    ];
    
    const randomJuice = juices[Math.floor(Math.random() * juices.length)];
    document.getElementById('featured-juice').innerHTML = `<h3>${randomJuice.split(':')[0]}</h3><p>${randomJuice.split(':')[1]}</p>`;
});