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
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // обработка отправки формы
    };

    return (
        <div>
            <Button className={FeedbackFormCN('Button')}
                    variant="contained"
                    onClick={handleClickOpen}
            >
                Заказать звонок</Button>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*    Обратная связь*/}
            {/*</Button>*/}
            <Dialog className={FeedbackFormCN()} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Закажите обратную связь</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Закажите оптимизацию, поднимите эффективность!
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
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
                        <TextField
                            margin="dense"
                            id="email"
                            label="Электронная почта"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="phone"
                            label="Номер телефона"
                            multiline
                            // rows={1}
                            fullWidth
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant={'outlined'}>
                        Отмена
                    </Button>
                    <Button type="submit" onClick={handleSubmit} variant={'contained'} color="primary">
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FeedbackForm;
