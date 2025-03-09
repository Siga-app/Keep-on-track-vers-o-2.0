
/**
 * Função para ajustar o tamanho das imagens do logo
 */
(function() {
  // Função para ajustar logo antes mesmo do DOM estar completamente carregado
  function preAdjustLogo() {
    const appBrandText = document.querySelector('.app-brand-text.demo img');
    const appBrandLogo = document.querySelector('.app-brand-logo.demo img');
    const appBrandLink = document.querySelector('.app-brand-link');
    
    if (appBrandText) {
      appBrandText.style.maxHeight = '48px';
      appBrandText.style.display = 'inline-block';
    }
    
    if (appBrandLogo) {
      appBrandLogo.style.maxHeight = '36px';
    }
    
    if (appBrandLink) {
      appBrandLink.style.justifyContent = 'center';
    }
  }
  
  // Executar imediatamente
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preAdjustLogo);
  } else {
    preAdjustLogo();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const appBrandText = document.querySelector('.app-brand-text.demo img');
    const appBrandLogo = document.querySelector('.app-brand-logo.demo img');
    
    function adjustLogoSize() {
      const menuWidth = document.querySelector('.menu') ? document.querySelector('.menu').offsetWidth : 0;
      const isMenuCollapsed = document.querySelector('.layout-menu-collapsed');
      
      // Ajustes baseados no tamanho da tela e estado do menu
      if (window.innerWidth < 992) {
        // Telas pequenas (dispositivos móveis)
        if (appBrandText) {
          appBrandText.style.maxHeight = '42px';
        }
        if (appBrandLogo) {
          appBrandLogo.style.maxHeight = '34px';
        }
      } else if (isMenuCollapsed) {
        // Menu colapsado em telas grandes
        if (appBrandText) {
          appBrandText.style.display = 'none';
        }
        if (appBrandLogo) {
          appBrandLogo.style.maxHeight = '42px';
        }
      } else if (menuWidth < 200) {
        // Menu estreito, mas não colapsado
        if (appBrandText) {
          appBrandText.style.maxHeight = '42px';
          appBrandText.style.display = 'inline-block';
        }
        if (appBrandLogo) {
          appBrandLogo.style.maxHeight = '34px';
        }
      } else {
        // Menu normal em telas grandes
        if (appBrandText) {
          appBrandText.style.maxHeight = '48px';
          appBrandText.style.display = 'inline-block';
        }
        if (appBrandLogo) {
          appBrandLogo.style.maxHeight = '36px';
        }
      }
      
      // Sempre centralizar logo e texto na navbar
      const appBrandLink = document.querySelector('.app-brand-link');
      if (appBrandLink) {
        appBrandLink.style.justifyContent = 'center';
      }
    }
    
    // Ajuste inicial
    adjustLogoSize();
    
    // Ajuste ao redimensionar a janela
    window.addEventListener('resize', adjustLogoSize);
    
    // Ajuste quando o menu colapsar/expandir
    const menuToggleElements = document.querySelectorAll('.layout-menu-toggle');
    menuToggleElements.forEach(element => {
      element.addEventListener('click', function() {
        // Pequeno atraso para permitir que a transição do menu termine
        setTimeout(adjustLogoSize, 300);
      });
    });
  });
})();
