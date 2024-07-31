import { useForm } from "react-hook-form";

//bcz of type script 
type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {

    //form framework
    const { register, watch, handleSubmit } = useForm<RegisterFormData>();

    
    return (
        <form className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold ">Create an Account</h2>
            {/* flex to position things
            in mobile -column and for medium sized screen -row */}
            <div className="flex flex-col md:flex-row gap-5">
                {/* flex-1 tell to take all space available for the element label */}
                <label className="text-gray-700 text-sm font-bold  flex-1">
                    First Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                     {...register("firstName",{required:"This field is required"})}
                    ></input>
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("lastName",{required:"This field is required"})}
                    ></input>
                </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input 
                    type="email"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email",{required:"This field is required"})}
                    ></input>
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                    Password
                    <input 
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password",{
                        required:"This field is required",
                        minLength:{
                            value:6,
                            message: "Password with 6 or more characters ",
                        },
                    })}
                    ></input>
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                    Confirm Password
                    <input 
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("confirmPassword",{
                        validate:(val)=>{
                            if (!val) {
                                return "This field id required";
                            } else if (watch("password") !==val) {
                                return "Your passwords do not match";
                            }
                        }
                    })}
                    ></input>
            </label>
            <span>
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Create Account</button>
            </span>
        </form>
    );
};

export default Register;