import { Request, Response, response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    //will caall service function to send this daata
    const result = await studentServices.createStudentIntoDb(student);

    //send response
    res.status(200).json({
      sucsess: true,
      messaage: 'student is creaated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDb();
    //send response
    res.status(200).json({
      sucsess: true,
      messaage: 'student is get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSigleStudentFromDb(studentId);
    //send response
    res.status(200).json({
      sucsess: true,
      messaage: 'single student is get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
