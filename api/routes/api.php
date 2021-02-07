<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'users',
], function () {
    Route::post('/', 'App\Http\Controllers\UserController@store');

    Route::group([
        'middleware' => 'apiJwt',
    ], function () {
        Route::get('/', 'App\Http\Controllers\UserController@index');
    });
});


Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('/login', 'App\Http\Controllers\AuthController@login');

    Route::group([
        'middleware' => 'apiJwt',
    ], function () {
        Route::post('/logout', 'App\Http\Controllers\AuthController@logout');
        Route::post('/refresh', 'App\Http\Controllers\AuthController@refresh');
    });
});


Route::group([
    'prefix' => 'students',
    'middleware' => 'apiJwt',
], function () {
    Route::get('/', 'App\Http\Controllers\StudentsController@index');
    Route::get('/{id}', 'App\Http\Controllers\StudentsController@show');
    Route::post('/', 'App\Http\Controllers\StudentsController@store');
    Route::put('/{id}', 'App\Http\Controllers\StudentsController@update');
    Route::delete('/{id}', 'App\Http\Controllers\StudentsController@destroy');
});
