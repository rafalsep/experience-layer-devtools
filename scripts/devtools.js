chrome.devtools.panels.create('Experience Layer Devtools', '', 'dist/index.html', panel => {
  panel.onShown.addListener(panelWindow => {
    panelWindow.panelCreated(chrome.devtools);
  });
});
