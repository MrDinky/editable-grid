<?php

/* @var $this yii\web\View */

$this->title = 'Grid example';
?>
<div id="wrapper">
    <grid></grid>
</div>
<template id="grid-template" >
    <div>
        <button class="btn btn-primary" v-on:click="addRow" id="add-row">Add row</button>
        <table class="table table-bordered table-hover">
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>City</th>
                <th></th>
            </tr>
            <tr v-for="(row, index) in rows">
                <td><input v-model="row.name" v-on:blur="updateRow(row.id, row.name, 'name')"></td>
                <td><input v-model="row.last_name" v-on:blur="updateRow(row.id, row.last_name, 'last_name')"></td>
                <td><input v-model="row.city" v-on:blur="updateRow(row.id, row.city, 'city')"></td>
                <td><button class="btn btn-xs btn-danger" @click="removeRow(row.id, index)">Remove</button></td>
            </tr>
        </table>
    </div>
</template>
