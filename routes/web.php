<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (auth()->check()) {
        // 사용자가 로그인한 경우 main 컴포넌트를 렌더링
        return Inertia::render('main');
    }
    // 로그인하지 않은 경우 Welcome 컴포넌트를 렌더링
    return Inertia::render('auth/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

