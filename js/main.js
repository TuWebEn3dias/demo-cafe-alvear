document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservasForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('formName').value.trim();
      const fecha = document.getElementById('formDate').value;
      const hora = document.getElementById('formTime')?.value || '';
      const personas = document.getElementById('formPeople').value;
      const telefono = document.getElementById('formTel')?.value || '';
      const mensaje = document.getElementById('formMessage')?.value || '';
      let texto = `Hola! Me llamo ${nombre}.`;
      if (fecha) texto += `\nQuiero reservar para ${personas} persona(s) el ${fecha}`;
      if (hora) texto += ` a las ${hora}`;
      texto += `.`;
      if (telefono) texto += `\nMi teléfono: ${telefono}`;
      if (mensaje) texto += `\n${mensaje}`;
      window.open(`https://wa.me/5491169326466?text=${encodeURIComponent(texto)}`, '_blank');
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  const nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
