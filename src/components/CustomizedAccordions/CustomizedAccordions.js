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
                <AccordionSummary className={accordionCN('AccordionSummary')}
                                  aria-controls="panel1d-content"
                                  id="panel1d-header">
                    <Typography>Как формируется стоимость услуг?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Стоимость наших услуг зависит от нескольких факторов. Во-первых, это базовая ставка менеджера,
                        который будет работать над вашим проектом. Во-вторых, вид бизнес-процесса, который мы будем
                        оптимизировать. В-третьих, количество участников, задействованных в процессе. В-четвертых,
                        количество документов и артефактов, необходимых для работы. И другие нюансы, которые всплывают
                        после аудита.
                        В любом случае, цена согласовывается с представителем заказчика.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()}
                       expanded={expanded === 'panel2'}
                       onChange={handleChange('panel2')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content"
                                  id="panel1d-header">
                    <Typography>Только крупные компании нуждаются в оптимизации бизнес-процессов?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Оптимизация бизнес-процессов необходима не только крупным компаниям. Малые и средние предприятия
                        также могут получить значительную выгоду от оптимизации своих процессов. Внедрение эффективных
                        методов работы помогает повысить производительность, сократить издержки и улучшить общую
                        эффективность деятельности компании независимо от ее размера.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()}
                       expanded={expanded === 'panel3'}
                       onChange={handleChange('panel3')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content"
                                  id="panel1d-header">
                    <Typography>Регламентация и систематизация бизнеса может ограничить гибкость?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Формат внедряемых решений не ограничивает творчество и гибкость, а устанавливает основные
                        правила и основополагающие столпы, благодаря которым, каждый участник работает более эффективно
                        и слаженно, при необходимости можно пересобрать процесс, а исходящий результат останется
                        прежним.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content"
                                  id="panel1d-header">
                    <Typography>
                        Сколько времени требуется для оптимизации (настройки процесса) в бизнесе
                        компании?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        - Время, необходимое для оптимизации (настройки процесса) в бизнесе компании, зависит от
                        нескольких факторов. Важными являются количество процессов, количество участников,
                        задействованных в них, количество используемых документов и возможное сопротивление со стороны
                        участников. Мы стремимся выполнить работу как можно быстрее, чтобы не тратить ваше и наше время,
                        но конкретные сроки будут зависеть от этих факторов.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={accordionCN()} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content"
                                  id="panel1d-header">
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
                <AccordionSummary className={accordionCN('AccordionSummary')} aria-controls="panel1d-content"
                                  id="panel1d-header">
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