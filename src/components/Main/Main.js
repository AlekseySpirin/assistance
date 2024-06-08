import React from 'react';
import {cn} from "@bem-react/classname";
import './Main.scss';
import CustomizedAccordions from '../CustomizedAccordions/CustomizedAccordions'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import MyCard from "../MyCard/MyCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForwardIcon from '@mui/icons-material/Forward';
import ProductCard from "../ProductCard/ProductCard";
import {ExpandMore} from "@mui/icons-material";
import {styled} from "@mui/material/styles";



const Main = () => {
    const mainCN = cn('Main');
    const [expanded, setExpanded] = React.useState(false);
    const [moreIconStatus, setMoreIconStatus] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setMoreIconStatus(!moreIconStatus);
    };

    const ExpandMore = styled((props) => {
        const {
            expand,
            ...other
        } = props;
        return <IconButton {...other} />;
    })(({
            theme,
            expand
        }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    return (
        <main className={mainCN()}>
            <Box className={mainCN('Wrapper')}>
                <Typography className={mainCN('Title')}
                            component="h2"
                >
                    Трансформируем бизнес-процессы, оптимизируем ресурсы, предотвращаем финансовые потери
                </Typography>


                <Typography className={mainCN('Subtitle')}
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
                    <MyCard xs={16} sm={8} md={4} title={'Без приостановки деятельности бизнеса'}
                    >
                        Без приостановки деятельности бизнеса,Вы можете продолжать функционировать в обычном режиме, не
                        беспокоясь о возможных простоях или нарушениях в работе
                    </MyCard>


                    <MyCard xs={16} sm={8} md={4} title={'Экономия времени и ресурсов'}
                    >
                        Вы сможете использовать освободившееся время для решения других важных задач, так как наша
                        компания быстро и качественно выполнит свою работу
                    </MyCard>


                    <MyCard xs={16} sm={8} md={4} title={'Сокращение рисков'}
                    >
                        Наша команда профессионалов минимизирует возможные риски при реализации проекта, что позволит
                        избежать финансовых потерь и сохранить репутацию вашей компании
                    </MyCard>


                    <MyCard xs={16} sm={8} md={4} title={'Гибкость и масштабируемость'}
                    >
                        Мы адаптируемся под любые изменения в вашем бизнесе, чтобы предоставить наилучший сервис,
                        который будет расти вместе с вашим успехом.
                    </MyCard>

                </Grid>
            </Box>
            <Box
                // className={mainCN('Wrapper')}
                //     sx={{
                //     marginTop: '20px',
                //     backgroundColor: '#fff',
                //     padding: '10px',
                //     borderRadius: '10px'
                // }}
            >


                {/*<Box className={mainCN('Wrapper')}>*/}
                <Typography className={mainCN('Subtitle', 'margin-20px')}
                            component="h2"
                            variant="h5"

                >
                    В успешной компании каждый сотрудник понимает свои задачи и действует согласно установленным
                    процедурам. Это помогает компании достигать своих целей и адаптироваться к изменяющимся условиям
                    рынка без значительных затрат времени и ресурсов на внутренние изменения.
                    В каждой компании проходят следующие процессы:
                </Typography>


                <Grid gap={'20px'} justifyContent={'center'} container direction={'row'} columns={16}
                      marginLeft={0}>
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

                <Typography className={mainCN('Description', 'margin-10px')}
                            component="p"
                            sx={{margin: 0}}
                >
                    Если в компании бизнес-процессы происходит неправильно или их пересмотр происходит
                    несвоевременно, это может привести к различным проблемам в текущей операционной работе компании,
                    включая возникновение ошибок и недочетов. Более того, эти ошибки нельзя исправить ни путем
                    привлечения новых клиентов, ни путем дополнительных инвестиций, при этом данный способ и вовсе
                    может усугубить проблему.
                    Мы предлагаем устранять саму проблему, а не следствие этой проблемы так как считаем, что лучше
                    устранить саму причину проблемы, чем бороться с её последствиями.
                </Typography>

                {/*</Box>*/}

            </Box>
            <Box className={mainCN('Wrapper')}>
                <Typography className={mainCN('Title')}
                            component="h2"
                >
                    Продукты
                </Typography>
                <Grid padding={'20px'} container spacing={2} columns={15}>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Базовый аудит процессов, интеграционное заключение + схема и одна консультация по внедрению'}
                                 price={'Цена: 25000 руб.'}
                    >

                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Комплексный анализ и оптимизация бизнес-процессов. '}
                                 price={'Цена: 40000 руб.'}
                    >
                        Дополнительные возможности: 1 месяц бесплатной поддержки после внедрения изменений и возможность
                        двух корректировок в любое время в течение полугода.
                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Комплексный анализ бизнес-процессов и их оптимизация, а также подготовка стратегии оптимизации для масштабирования бизнеса'}
                                 price={'Цена: 80000 руб.'}
                    >
                        Дополнительные возможности: 6 месяцев бесплатной поддержки после внедрения изменений и
                        возможность 6 экстренных корректировок в любое время в течение года.
                    </ProductCard>
                </Grid>
            </Box>
            <Box className={mainCN('Wrapper')}>
                <Typography className={mainCN('Title')}
                            component="h2"
                >
                    Результаты которые будут после трансформации
                </Typography>
                <Grid padding={'20px'} container spacing={2} columns={15}>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Экономия времени и ресурсов:'}
                    >
                        Сотрудничество с нашей компанией позволяет вам делегировать определенные задачи и процессы,
                        освобождая ваше время и ресурсы для других важных дел. Вы можете сосредоточиться на основных
                        аспектах своего бизнеса, в то время как мы занимаемся выполнением необходимых задач.
                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Сокращение рисков:'}
                    >
                        Сотрудничество с нашей компанией также помогает снизить риски, связанные с
                        выполнением определенных задач. Мы можем предоставить экспертную оценку и рекомендации, а также
                        взять на себя ответственность за выполнение определенных процессов
                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Гибкость и масштабируемость:'}

                    >
                        Сотрудничество с нами позволяет вам гибко управлять своими
                        потребностями и ресурсами. Вы можете легко масштабировать объем услуг в зависимости от текущих
                        потребностей вашего бизнеса
                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Увеличение прибыли:'}

                    >
                        Благодаря экономии времени и ресурсов, повышению эффективности и сокращению
                        рисков, сотрудничество с нашей компанией поможет увеличить прибыль вашего бизнеса
                    </ProductCard>
                    <ProductCard xs={15} sm={7.5} md={5}
                                 title={'Повышение качества:'}

                    >
                        Позволит компании предоставлять более качественные услуги и продукты, что повысит уровень
                        удовлетворенности клиентов и повысит средний чек
                    </ProductCard>
                </Grid>
            </Box>
            <Box className={mainCN('Wrapper')}>
                <Card sx={{
                    background: 'none',
                    boxShadow: 'none',
                    padding: 0
                }}
                >
                    <CardActions disableSpacing sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                        <Typography marginBottom={0}
                                    fontSize={'clamp(14px, 4vw, 19px)'}
                                    variant="h6"
                                    color="black"
                                    paragraph
                                    padding={'0 10px 0 10px'}
                        >
                            Оптимизация бизнес-процессов – это сложный и многогранный процесс, который требует
                            тщательного анализа и планирования. Однако, если все сделано правильно, он может привести к
                            значительному улучшению эффективности работы компании. <br/> <br/>

                            Один из способов достижения оптимизации бизнес-процессов – это использование технологий
                            автоматизации. Автоматизация позволяет сократить количество ручного труда и уменьшить
                            вероятность ошибок при выполнении задач. Кроме того, она помогает ускорить процессы и
                            повысить точность результатов.
                        </Typography>
                        {!moreIconStatus &&
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"

                            >
                                <Typography
                                variant="h6" color="black"
                                fontSize={'clamp(14px, 4vw, 19px)'}
                                marginBottom={0}
                                paragraph
                            >
                                Подробнее
                            </Typography>
                                <ExpandMoreIcon fontSize={'large'}/>
                            </ExpandMore>}
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography
                                variant="h6" color="black"
                                fontSize={'clamp(14px, 4vw, 19px)'}
                                marginBottom={0}
                                paragraph
                            >
                                Другой способ – это изменение структуры организации. Например, можно создать команды или
                                отделы для выполнения определенных функций вместо того, чтобы каждый сотрудник занимался
                                всем сразу. Это поможет улучшить координацию работы и повысить эффективность. <br/>
                                <br/>

                                Также важно учитывать гибкость при оптимизации бизнес-процессов. Гибкость означает
                                способность быстро адаптироваться к изменяющимся условиям рынка или экономической
                                обстановке. Для этого необходимо иметь возможность быстро перестраивать процессы и
                                корректировать стратегии. <br/> <br/>

                                В целом, оптимизация бизнес-процессов является важным инструментом для повышения
                                эффективности работы компании. Она позволяет сократить затраты времени и ресурсов,
                                улучшить
                                качество продукции или услуг, а также обеспечить гибкость в условиях изменяющейся
                                экономической ситуции.
                            </Typography>
                            {moreIconStatus &&
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >

                                    <ExpandMoreIcon fontSize={'large'}/>
                                </ExpandMore>}
                        </CardContent>
                    </Collapse>

                </Card>

            </Box>
            {/*<Typography className={mainCN('Title')}*/}
            {/*            component="h3">*/}
            {/*    Работать с нами*/}
            {/*</Typography>*/}

            <Typography className={mainCN('Subtitle', 'margin-20px')}
                        component="h2"
                        variant="h5"

            >
                Оптимизация бизнес-процессов может показаться сложной задачей, но это действительно важный шаг для
                улучшения работы вашей компании. Использование технологий автоматизации позволит вам сократить
                количество ручного труда и уменьшить вероятность ошибок при выполнении задач. Вы должны иметь
                возможность быстро перестраивать процессы и корректировать стратегии в соответствии с изменяющимися
                условиями рынка или экономической обстановкой. В целом, оптимизация бизнес-процессов является важным
                инструментом для повышения эффективности работы компании. Но помните, что всегда лучше привлечь
                экспертов для решения таких сложных задач.
            </Typography>
            <Typography className={mainCN('Subtitle', 'margin-no-top')}
                        component="h2"
                        variant="h5"

            >
                Оптимизация бизнес-процессов — это ключевой момент для улучшения работы вашей компании и необходимый
                этап для её масштабирования. Если вы проведёте оптимизацию правильно, то это позволит существенно
                повысить эффективность работы предприятия, ускорить его развитие и увеличить прибыль.
                Однако помните, что оптимизация процессов требует знания методологий управления процессами, технических
                навыков, креативности, знания законодательства, функционала информационных ресурсов и инструментов и так
                далее. Обратитесь к специалистам, которые проведут комплекс работ без существенного отвлечения от работы
                и приостановки деятельности компании, и вам останется только наслаждаться отлаженными процессами без
                лишних операционных движений.
            </Typography>
            <CustomizedAccordions/>

        </main>
    )
};

export default Main;
