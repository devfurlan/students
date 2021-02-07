<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Services\ValidatorStudentsService;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function index()
    {
        return [
            'data' => Students::all(),
            'count' => Students::count()
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return void|\Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,255',
            'birth' => 'required|date',
            'gender' => ['required', 'string', Rule::in(['M', 'F'])],
            'cpf' => 'required|string|between:11,11|unique:students',
            'email' => 'required|string|email|max:255|unique:students',
            'grade' => 'required|string|between:2,255',
            'class' => 'required|string|between:1,1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        Students::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Students::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return void|\Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,255',
            'birth' => 'required|date',
            'gender' => ['required', 'string', Rule::in(['M', 'F'])],
            'cpf' => 'required|string|between:11,11|unique:students,cpf,' . $id,
            'email' => 'required|string|email|max:255|unique:students,email,' . $id,
            'grade' => 'required|string|between:2,255',
            'class' => 'required|string|between:1,1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $student = Students::findOrFail($id);
        $student->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = Students::findOrFail($id);
        $student->delete();
    }
}
