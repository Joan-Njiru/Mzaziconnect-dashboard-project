import { StudentData } from "../hooks/usePostStudent";
import { SubjectData } from "../hooks/usePostSubject";

 export const getStudent= async()=>{
    const url = 'https://sakigake-backend-ecc1b0d1bf4d.herokuapp.com/students/students/';

    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
 }
  export const addStudent = async (studentData: StudentData): Promise<any> => {
    const url = 'https://sakigake-backend-ecc1b0d1bf4d.herokuapp.com/students/add_student/'; 
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add student");
      }
  
      const result = await response.json();
      return result;
    } catch (error: any) {
      throw new Error("Failed to add student: " + error.message);
    }    
  };
  
  export const getTeacher= async()=>{
    const url = 'api/get-teacher';
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
  }
  export const postTeacher = async (TeacherData:any) => {
    const url = 'api/add-teacher';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(TeacherData),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add teacher");
      }
    } catch (error:any) {
      throw new Error(error.message || "Failed to add teacher");
    }
  }

  export const getParent= async()=>{
    const url = 'https://sakigake-backend-ecc1b0d1bf4d.herokuapp.com/account/schools/2/parents/register/';
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
 }
export async function postParent(parentData: any) {
  const url = 'api/add-parent';
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parentData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add parent");
    }
  } catch (error:any) {
    throw new Error(error.message || "Failed to add parent");
  }
}

interface FormData {
  school_name: string;
  password: string;
}


export const postLogin = async (formData: FormData) => {
  const url = 'api/post-login';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Login failed'); 
    }

    return response; 
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};

  
export const getSubject= async()=>{
  const url = 'https://sakigake-backend-ecc1b0d1bf4d.herokuapp.com/subjects/subjectsList/';
  try{
      const response = await fetch(url);
      const result = await response.json();
      return result
  }
  catch(error:any){
      return error.message
  }
}

export const addSubject = async (subjectData: SubjectData): Promise<any> => {
  const url = 'api/add-subject';
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subjectData),
    });
    if (!response.ok) {
      throw new Error("Failed to add subject");
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error("Failed to add subject: " + error.message);
  }
};

export interface ClassData{
  grade_name: string;
  class_teacher: string;
}
export const getClass= async()=>{
  const url = 'api/get-class';
  try{
      const response = await fetch(url);
      const result = await response.json();
      return result
  }
  catch(error:any){
      return error.message
  }
}

export const postClass = async (classData: ClassData): Promise<Response> => {
  const url = "api/add-class";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classData),
    });

    return response;
  } catch (error) {
    throw new Error("Failed to add class");
  }
};

export type { SubjectData, StudentData };


interface UsersData {
  school_name: string;
  email_address: string;
  phonenumber: string;
  create_password: string;
  confirm_password: string;
}

interface UsersData {
  school_name: string;
  email_address: string;
  phonenumber: string;
  create_password: string;
  confirm_password: string;
}
export const createUser = async (userData: UsersData) => {
  const url = `https://sakigake-backend-ecc1b0d1bf4d.herokuapp.com/account/schools/signup/registered`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};