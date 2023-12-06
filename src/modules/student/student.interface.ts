export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guaridan = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNO: string;
  motherName: string;
  motherOccupation: string;
  motherContactNO: string;
};

export type LocaGuardian = {
  name: string;
  occuaption: string;
  address: string;
  contactNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  bloodGroup?: 'a+' | 'a-' | 'b+' | 'b-' | 'o+' | 'o-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guaridan;
  localGuaardian: LocaGuardian;
  profileImg?: string;
  isActive: 'aactive' | 'inactice';
};
