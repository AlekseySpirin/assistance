import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {cn} from "@bem-react/classname";
import './CustomizedAccordions.scss'
import {Box} from "@mui/material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    borderRadius: '15px',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .3)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: 'none',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const accordionCN = cn('Accordion');

    return (
        <Box className={accordionCN('AccordionListWrapper')}>
            <Accordion className={accordionCN()}
                       expanded={expanded === 'panel1'}
                       onChange={handleChange('panel1')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()}
                       expanded={expanded === 'panel2'}
                       onChange={handleChange('panel2')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №5</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Часто задаваемые вопросы №6</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.
                        Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый
                        вопрос.Ответ на часто задаваемый вопрос.Ответ на часто задаваемый вопрос.Ответ на часто
                        задаваемый вопрос.Ответ на часто задаваемый вопрос.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}