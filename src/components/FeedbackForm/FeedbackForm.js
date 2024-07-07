import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {cn} from "@bem-react/classname";
import './FeednackForm.scss'


function FeedbackForm() {


    const FeedbackFormCN = cn('FeedbackForm')
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("access_key", "a9883f1d-2e48-4150-91f9-4112ebea635c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log(object)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Успех", res);
            handleClose(); // Закрыть модальное окно при успешной отправке
        }
    };

    return (
        <div className={FeedbackFormCN()}>
            <Button className={FeedbackFormCN('Button')}
                    variant="contained"
                    onClick={(event) => {
                        event.stopPropagation();
                        handleClickOpen();
                    }}
                    style={{flexDirection: 'column'}}
            >
                Заказать оптимизацию <span className={FeedbackFormCN({display_size: 's'})}>у нас</span> </Button>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*    Обратная связь*/}
            {/*</Button>*/}
            <Dialog className={FeedbackFormCN()} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form
                    onSubmit={onSubmit}
                >
                    <DialogTitle id="form-dialog-title">Закажите обратную связь</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Закажите оптимизацию, поднимите эффективность!
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Имя"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        {/*<TextField*/}
                        {/*    margin="dense"*/}
                        {/*    id="email"*/}
                        {/*    label="Электронная почта"*/}
                        {/*    type="email"*/}
                        {/*    fullWidth*/}
                        {/*    value={email}*/}
                        {/*    onChange={(event) => setEmail(event.target.value)}*/}
                        {/*/>*/}
                        <TextField
                            margin="dense"
                            id="phone"
                            type={'text'}
                            label="Номер телефона"
                            placeholder={'+7 (918) 292-1781'}
                            // multiline
                            // rows={1}
                            fullWidth
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" variant={'outlined'}>
                            Отмена
                        </Button>
                        <Button type="submit"
                                onClick={onSubmit}
                                variant={'contained'} color="primary">
                            Отправить
                        </Button>
                        {/*<button type={'submit'}></button>*/}
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default FeedbackForm;
