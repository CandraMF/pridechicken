<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/profil', function () {
    return Inertia::render('Profile');
})->name('profil');

Route::get('/kemitraan', function () {
    return Inertia::render('Kemitraan');
})->name('kemitraan');

Route::get('/kontak', function () {
    return Inertia::render('Kontak');
})->name('kontak');

Route::get('/menu', function () {
    return Inertia::render('Menu');
})->name('menu');

Route::get('/registrasi-mitra', function () {
    return Inertia::render('RegistrasiMitra');
})->name('registrasi');

Route::get('/loker', function () {
    return Inertia::render('Loker');
})->name('loker');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
