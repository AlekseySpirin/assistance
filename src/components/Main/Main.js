import React from 'react';
import {cn} from "@bem-react/classname";
import './Main.scss';
import {Box, Grid, Stack, Typography} from "@mui/material";
import MyCard from "../MyCard/MyCard";
import ForwardIcon from '@mui/icons-material/Forward';


const Main = () => {
    const mainCN = cn('Main');
    return (
        <main className={mainCN()}>
            <Box className={mainCN('Wrapper')}>
                <Typography className={mainCN('Title')}
                            component="h2"
                >
                    Трансформируем бизнес-процессы, оптимизируем ресурсы, предотвращаем финансовые потери
                </Typography>


                <Typography className={mainCN('Description')}
                            component="p"
                >
                    Оптимизируйте бизнес с нашей помощью, изменив процессы текущие или внедрив новые . Тщательно
                    проанализируем вашу деятельность, найдем проблемы и возможности для улучшений. Разработаем
                    индивидуальные решения, учитывающие ваши ресурсы и потребности. Наш современный подход, технологии и
                    искусственный интеллект позволят адаптироваться к каждому клиенту и его процессам.
                    Успех и стабильность вашего бизнеса зависят от правильного управления процессами.
                </Typography>
            </Box>

            <Box className={mainCN('Wrapper')}>
                <Typography className={mainCN('Title')}
                            component="h2"
                >
                    Преимущества работы с нами
                </Typography>
                <Grid padding={'20px'} container spacing={2} columns={16}>
                    <MyCard title={'Без приостановки деятельности бизнеса'}
                    >
                        Без приостановки деятельности бизнеса,Вы можете продолжать функционировать в обычном режиме, не
                        беспокоясь о возможных простоях или нарушениях в работе
                    </MyCard>


                    <MyCard title={'Экономия времени и ресурсов'}
                    >
                        Вы сможете использовать освободившееся время для решения других важных задач, так как наша
                        компания быстро и качественно выполнит свою работу
                    </MyCard>


                    <MyCard title={'Сокращение рисков'}
                    >
                        Наша команда профессионалов минимизирует возможные риски при реализации проекта, что позволит
                        избежать финансовых потерь и сохранить репутацию вашей компании
                    </MyCard>


                    <MyCard title={'Гибкость и масштабируемость'}
                    >
                        Мы адаптируемся под любые изменения в вашем бизнесе, чтобы предоставить наилучший сервис,
                        который будет расти вместе с вашим успехом.
                    </MyCard>

                </Grid>
            </Box>
            <Box sx={{
                marginTop: '20px',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '10px'
            }}>


                <Box className={mainCN('Wrapper')}>
                    <Typography className={mainCN('Subtitle')}
                                component="h2"
                                variant="h5"

                    >
                        В успешной компании каждый сотрудник понимает свои задачи и действует согласно установленным
                        процедурам. Это помогает компании достигать своих целей и адаптироваться к изменяющимся условиям
                        рынка без значительных затрат времени и ресурсов на внутренние изменения.
                        В каждой компании проходят следующие процессы:
                    </Typography>

                </Box>

                <Grid gap={'20px'} justifyContent={'center'} container direction={'row'} columns={16} marginLeft={0}>
                    <Grid className={mainCN('CardsWrapper')} item direction={'column'} xs={16} sm={16} md={8}
                          spacing={2}
                          columns={16}
                    >
                        <MyCard
                            title={'Основные процессы напрямую связаны с созданием продукта или услуги и получением прибыли'}
                        >
                        </MyCard>
                        <Stack sx={{width: '100%', alignItems: 'center'}}>
                            <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}
                                         fontSize={"large"}/>
                        </Stack>
                        <MyCard>
                            Пример:
                            Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием
                            продукта
                            или
                            услуги (консультации) и получением прибыли от их продажи.
                        </MyCard>
                    </Grid>
                    <Grid className={mainCN('CardsWrapper')} item direction={'column'} sx xs={16} sm={16} md={8}
                          spacing={2} columns={16}>
                        <MyCard
                            title={'Основные процессы напрямую связаны с созданием продукта или услуги и получением прибыли'}
                        >
                        </MyCard>
                        <Stack sx={{width: '100%', alignItems: 'center'}}>
                            <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}
                                         fontSize={"large"}/>
                        </Stack>
                        <MyCard>
                            Пример:
                            Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием
                            продукта
                            или
                            услуги (консультации) и получением прибыли от их продажи.
                        </MyCard>
                    </Grid>
                    <Grid className={mainCN('CardsWrapper')} item direction={'column'} sx xs={16} sm={16} md={8}
                          spacing={2} columns={16}>
                        <MyCard
                            title={'Основные процессы напрямую связаны с созданием продукта или услуги и получением прибыли'}
                        >
                        </MyCard>
                        <Stack sx={{width: '100%', alignItems: 'center'}}>
                            <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}
                                         fontSize={"large"}/>
                        </Stack>
                        <MyCard>
                            Пример:
                            Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием
                            продукта
                            или
                            услуги (консультации) и получением прибыли от их продажи.
                        </MyCard>
                    </Grid>
                    <Grid className={mainCN('CardsWrapper')} item direction={'column'} sx xs={16} sm={16} md={8}
                          spacing={2} columns={16}>
                        <MyCard
                            title={'Основные процессы напрямую связаны с созданием продукта или услуги и получением прибыли'}
                        >
                        </MyCard>
                        <Stack sx={{width: '100%', alignItems: 'center'}}>
                            <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}
                                         fontSize={"large"}/>
                        </Stack>
                        <MyCard>
                            Пример:
                            Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием
                            продукта
                            или
                            услуги (консультации) и получением прибыли от их продажи.
                        </MyCard>
                    </Grid>
                </Grid>
                <Box  className={mainCN('Wrapper')}>
                    <Typography className={mainCN('Description', 'marginNone')}
                                component="p"
                    >
                        Если в компании бизнес-процессы происходит неправильно или их пересмотр происходит
                        несвоевременно, это может привести к различным проблемам в текущей операционной работе компании,
                        включая возникновение ошибок и недочетов. Более того, эти ошибки нельзя исправить ни путем
                        привлечения новых клиентов, ни путем дополнительных инвестиций, при этом данный способ и вовсе
                        может усугубить проблему.
                        Мы предлагаем устранять саму проблему, а не следствие этой проблемы так как считаем, что лучше
                        устранить саму причину проблемы, чем бороться с её последствиями.
                    </Typography>

                </Box>
            </Box>
            {/*<Typography className={mainCN('Title')}*/}
            {/*            component="h3">*/}
            {/*    Работать с нами*/}
            {/*</Typography>*/}
        </main>
    )
};

export default Main;
