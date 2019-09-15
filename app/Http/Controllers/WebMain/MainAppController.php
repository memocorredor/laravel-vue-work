<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainAppController extends Controller
{
    // Ini web controller and SPA view
    public function index()
    {
        return view('main');
    }
}
