import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './DragAndDrop.css';

function DragAndDrop() {
  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });

    dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        if (draggingElement) {
          const correctElement = dropzone.getAttribute('data-correct');
          if (draggingElement.id === correctElement) {
            dropzone.appendChild(draggingElement);
            Swal.fire({
              icon: 'success',
              title: 'Correcto',
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Intenta de nuevo',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
    });
  }, []);

  return (
    <div>
      <h1>Drag and Drop Flower Game</h1>
      <div className="flower-container">
        <img src="/images/flower-image.jpg" alt="Flor" className="flower-image" />
        <div className="dropzone" id="petals-dropzone" data-correct="petals"></div>
        <div className="dropzone" id="pistil-dropzone" data-correct="pistil"></div>
        <div className="dropzone" id="stamens-dropzone" data-correct="stamens"></div>
        <div className="dropzone" id="ovules-dropzone" data-correct="ovules"></div>
        <div className="dropzone" id="sepals-dropzone" data-correct="sepals"></div>
      </div>
      <div className="draggables">
        <div className="draggable" id="petals" draggable="true">Pétalos</div>
        <div className="draggable" id="pistil" draggable="true">Pistilo</div>
        <div className="draggable" id="stamens" draggable="true">Estambres</div>
        <div className="draggable" id="ovules" draggable="true">Óvulos</div>
        <div className="draggable" id="sepals" draggable="true">Sépalos</div>
      </div>
    </div>
  );
}

export default DragAndDrop;
