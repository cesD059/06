const fileInput = document.getElementById('fileInput');
        const message = document.getElementById('message');

        fileInput.addEventListener('change', () => {
            const selectedFile = fileInput.files[0];

            if (selectedFile) {
                const fileName = selectedFile.name;
                const fileExtension = fileName.split('.').pop().toLowerCase();

                if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                    message.textContent = 'Archivo válido: ' + fileName;
                    message.style.color = '#00ff00'; // Cambiar el color del mensaje a verde
                } else {
                    message.textContent = 'Archivo no válido. Se permiten solo archivos de imagen (jpg, jpeg, png, gif).';
                    message.style.color = '#ff0000'; // Mantener el color rojo para mensajes de error
                }
            } else {
                message.textContent = ''; // Limpiar el mensaje si no se selecciona ningún archivo
            }
        });