<?php
// Función para generar un campo de entrada
function generarCampoInput($type, $name, $id, $placeholder, $class) {
    return "<input type='$type' name='$name' id='$id' placeholder='$placeholder' class='$class'>";
}

// Función para generar un campo de selección
function generarCampoSelect($name, $id, $options, $class) {
    $select = "<select name='$name' id='$id' class='$class'>";
    foreach ($options as $option) {
        $select .= "<option value='$option'>$option</option>";
    }
    $select .= "</select>";
    return $select;
}

// Usuarios para el campo de selección
$usuarios = ["Ricardo", "Jesus", "kaesare", "pink", "yesica", "fer montse", "contabilidad", "Compras", "pamela salazar", "feernanda"];

// Generar campo de usuario (input)
$campoUsuario = generarCampoInput("text", "usuario", "usuario", "Usuario", "js-form-input-field");

// Generar campo de selección de usuarios
$campoSelectUsuarios = generarCampoSelect("ufield_25", "ufield_25", $usuarios, "inputbox js-form-select-field one");

// Formulario de tickets
$formulario = "<form id='jssupportticketform'>";
$formulario .= $campoUsuario;
$formulario .= $campoSelectUsuarios;
$formulario .= "</form>";

// Imprimir el formulario
echo $formulario;
?>