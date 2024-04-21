import { Form, useNavigation } from '@remix-run/react';
import { Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField } from 'react-aria-components';


export default function NewItemModal() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <>
            <button className="btn btn-secondary btn-lg" onClick={() => document.getElementById('add-item-modal')?.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Add Item
            </button>
            <dialog id="add-item-modal" className='modal'>
                <div className="modal-box">
                    <button className="btn btn-ghost btn-circle absolute top-0 right-0 p-2 mr-px mt-px" onClick={() => document.getElementById('add-item-modal')?.close()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <Form className="flex flex-col gap-4 w-75% max-w-64 mx-auto" method="post" action="/dorothy">
                        <h1 className="text-2xl text-center">Add a new item!</h1>
                        <fieldset disabled={isSubmitting}>
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input name="itemName" type="text" className="grow" placeholder="e.g. Drill" required />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input name="itemDescription" type="text" className="grow" placeholder="short description here" />
                            </label>
                            <div className="flex flex-row gap-2 m-2">
                                <input className="btn btn-primary flex-1" type="submit" value="Add Item!" />
                            </div>
                        </ fieldset>
                        {isSubmitting ? <span className="loading loading-spinner loading-lg text-primary mx-auto"></span> : null}
                    </Form>
                </div>
            </dialog>
        </>

    )
}