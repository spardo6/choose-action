# choose-action
Componente para permitir al usuario seleccionar una opción con la que quiere realizar una acción.

```javascript
var options = [
	{icon: 'photo_camera', text: 'Cámara', value: Self.ChooseAction.CAMERA},
	{icon: 'image', text: 'Galería', value: Self.ChooseAction.GALLERY}
];

var Choose = new app.Choose(options); // Inicializa el selector de opciones

Choose.show(); // Muestra el componente

Choose.on().then(function (ID) {
	resolve(ID);
}).catch(function () {
	reject();
});
```
