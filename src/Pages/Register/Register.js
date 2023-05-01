import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/Context';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onsubmit = (data) => {

        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => console.log(error))

                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='my-16'>
                <div className="max-w-sm mx-auto my-auto ">
                    <Card>
                        <h1 className='text-2xl font-bold text-center'>Register Here</h1>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="Name"
                                        value="Your Name"
                                    />
                                </div>
                                <TextInput
                                    id="name1"
                                    type="text"
                                    placeholder="Your Name"
                                    required={true}
                                    {...register('name')}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email1"
                                        value="Your Email"
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
                                        value="Your Password"
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
                            <Button type="submit" >
                                Register
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Register;