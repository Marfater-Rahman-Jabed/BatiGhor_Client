import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/Context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { LogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const onsubmit = (data) => {

        console.log(data)
        LogIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='my-16'>
            <div className="max-w-sm mx-auto my-auto">
                <Card>
                    <h1 className='text-2xl font-bold text-center'>SignIn </h1>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="Your Email"
                                {...register('email')}

                                required={true}
                            />

                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                placeholder='Password'
                                {...register('password')}
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">


                        </div>
                        <Button type="submit">
                            SignIn
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;