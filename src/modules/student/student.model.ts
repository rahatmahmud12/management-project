import { Schema, model } from 'mongoose';
import { Guaridan, LocaGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardian = new Schema<Guaridan>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNO: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNO: { type: String, required: true },
});

const localGuardian = new Schema<LocaGuardian>({
  name: { type: String, required: true },
  occuaption: { type: String, required: true },
  address: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: ['a+', 'a-', 'b+', 'b-', 'o+', 'o-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardian,
  localGuaardian: localGuardian,
  profileImg: { type: String },
  isActive: ['active', 'inaactive'],
});

//creaate aa model
export const StudentModel = model<Student>('Student', studentSchema);
