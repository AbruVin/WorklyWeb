import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar la sección activa durante el scroll
 * @param {Array<string>} sectionIds - Array de IDs de las secciones a observar
 * @param {Object} options - Opciones de configuración
 * @returns {string} - ID de la sección actualmente activa
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  
  const {
    rootMargin = '-20% 0px -35% 0px',
    threshold = [0, 0.25, 0.5, 0.75, 1]
  } = options;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold
    };

    const observerCallback = (entries) => {
      // Filtrar solo las entradas visibles
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Ordenar por ratio de intersección (más visible primero)
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        // La sección con mayor ratio de intersección es la activa
        const mostVisible = visibleEntries[0];
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    const elements = [];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    // Cleanup
    return () => {
      elements.forEach(element => observer.unobserve(element));
      observer.disconnect();
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}

/**
 * Función para hacer scroll suave a una sección con offset
 * @param {string} sectionId - ID de la sección a la que navegar
 * @param {number} offset - Offset adicional (por defecto el alto del header)
 */
export function scrollToSection(sectionId, offset = 70) {
  console.log(`🔍 Intentando navegar a: ${sectionId}`);
  const element = document.getElementById(sectionId);
  
  if (element) {
    console.log(`✅ Elemento encontrado: ${sectionId}`);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    console.log(`📍 Posición del elemento: ${elementPosition}, Offset: ${offset}, Posición final: ${offsetPosition}`);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error(`❌ Elemento con ID "${sectionId}" no encontrado`);
    console.log(`📋 IDs disponibles en el documento:`, 
      Array.from(document.querySelectorAll('[id]')).map(el => el.id)
    );
  }
}
