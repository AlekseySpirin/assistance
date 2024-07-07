import React from 'react';
import {cn} from "@bem-react/classname";
import Product1 from '../../image/product_bg/1.png'
import Product2 from '../../image/product_bg/2.png'
import Product3 from '../../image/product_bg/3.png'
import Product4 from '../../image/product_bg/4.png'

import './Main.scss';
import CustomizedAccordions from '../CustomizedAccordions/CustomizedAccordions'
import {
    Box, Card, CardActions, CardContent, Collapse, Grid, IconButton, Stack, Typography
} from "@mui/material";
import MyCard from "../MyCard/MyCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForwardIcon from '@mui/icons-material/Forward';
import ProductCard from "../ProductCard/ProductCard";
import {ExpandMore} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import Footer from "../Footer/Footer";


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
            expand, ...other
        } = props;
        return <IconButton {...other} />;
    })(({
            theme, expand
        }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    return (<main className={mainCN()}>
        <Box className={mainCN('Wrapper')}>
            <Typography className={mainCN('Title')}
                        component="h1"
            >
                Оптимизируем бизнес-процессы, предотвращаем финансовые потери, повышаем эффективность
            </Typography>


            <Typography className={mainCN('Subtitle')}
                        component="p"
            >
                UliEffectPlus специализируется на корректировке и внедрении бизнес - процессов. Мы тщательно
                проанализируем вашу деятельность, обнаружим процессы требующие корректировки. Разработаем
                индивидуальные решения, учитывающие ваши ресурсы и потребности.
                Наш современный подход, технологии и искусственный интеллект позволят адаптироваться к каждому
                клиенту и его процессам.
                Успех и стабильность вашего бизнеса зависят от правильно выстроенных процессов и их управлением.

            </Typography>
        </Box>

        <Box className={mainCN('Wrapper')} id={'privilege'}>
            <Typography className={mainCN('Title')}
                        component="h2"
            >
                Преимущества работы с нами
            </Typography>
            <Grid className={mainCN('CardsWrapper')} container spacing={2} columns={16}>
                <MyCard xs={16} sm={8} md={4}
                    // image={Product1}
                        background={`url(${Product1})`}
                        title={'Без приостановки деятельности бизнеса'}
                >
                    Наш подход не тормозит существующие процессы, а постепенно их меняет на эффективные, без
                    возможных простоев или нарушений в их работе
                </MyCard>


                <MyCard
                    // image={Product2}
                    background={`url(${Product2})`}
                    xs={16} sm={8} md={4} title={'Экономия времени и ресурсов'}
                >
                    Вы сможете использовать освободившееся время для решения других важных задач, так как наша
                    компания быстро и качественно выполнит свою работу
                </MyCard>


                <MyCard
                    // image={Product3}
                    xs={16} sm={8} md={4} title={'Сокращение рисков'}
                    background={`url(${Product3})`}
                >
                    Наша команда минимизирует возможные риски Вашего бизнеса, что позволит избежать финансовых
                    потерь и сохранить репутацию вашей компании
                </MyCard>


                <MyCard
                    // image={Product4}
                    xs={16} sm={8} md={4} title={'Гибкость и масштабируемость'}
                    background={`url(${Product4})`}
                >
                    Откорректированные процессы позволят проявить адаптивность под новые процессы, и являются
                    стартом масштабирования, в качестве побочного эффекта
                </MyCard>

            </Grid>
        </Box>
        <Box className={mainCN('Wrapper')}
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


            <Grid spacing={2} padding={'0 0 20px 0'} justifyContent={'center'} container columns={16}

            >
                <MyCard xs={16} sm={8} md={4}
                        title={'Основные процессы напрямую связаны с созданием продукта или услуги и получением прибыли'}
                >
                </MyCard>
                {/*<Stack sx={{width: '100%', alignItems: 'center'}}>*/}
                {/*    <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}*/}
                {/*                 fontSize={"large"}/>*/}
                {/*</Stack>*/}
                {/*<MyCard>*/}
                {/*    Пример:*/}
                {/*    Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием*/}
                {/*    продукта*/}
                {/*    или*/}
                {/*    услуги (консультации) и получением прибыли от их продажи.*/}
                {/*</MyCard>*/}


                <MyCard xs={16} sm={8} md={4}
                        title={'Вспомогательные и обеспечивающие процессы поддерживают основные процессы, например, путем\n' + '                        предоставления необходимых ресурсов или обслуживания оборудования'}
                >

                </MyCard>
                {/*<Stack sx={{width: '100%', alignItems: 'center'}}>*/}
                {/*    <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}*/}
                {/*                 fontSize={"large"}/>*/}
                {/*</Stack>*/}
                {/*<MyCard>*/}
                {/*    Пример:*/}
                {/*    Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием*/}
                {/*    продукта*/}
                {/*    или*/}
                {/*    услуги (консультации) и получением прибыли от их продажи.*/}
                {/*</MyCard>*/}

                <MyCard xs={16} sm={8} md={4}
                        title={'Управляющие процессы включают планирование и контроль над ходом производства'}
                >


                </MyCard>
                {/*<Stack sx={{width: '100%', alignItems: 'center'}}>*/}
                {/*    <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}*/}
                {/*                 fontSize={"large"}/>*/}
                {/*</Stack>*/}
                {/*<MyCard>*/}
                {/*    Пример:*/}
                {/*    Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием*/}
                {/*    продукта*/}
                {/*    или*/}
                {/*    услуги (консультации) и получением прибыли от их продажи.*/}
                {/*</MyCard>*/}


                <MyCard xs={16} sm={8} md={4}
                        title={'Процессы совершенствования или развития направлены на улучшение качества продукции или услуг,\n' + '                        расширение рынка сбыта'}
                >

                </MyCard>
                {/*<Stack sx={{width: '100%', alignItems: 'center'}}>*/}
                {/*    <ForwardIcon sx={{rotate: '90deg', color: '#fff', height: '60px', width: '60px'}}*/}
                {/*                 fontSize={"large"}/>*/}
                {/*</Stack>*/}
                {/*<MyCard>*/}
                {/*    Пример:*/}
                {/*    Консультации по управлению бизнесом. Этот процесс непосредственно связан с созданием*/}
                {/*    продукта*/}
                {/*    или*/}
                {/*    услуги (консультации) и получением прибыли от их продажи.*/}
                {/*</MyCard>*/}

            </Grid>

            <Typography className={mainCN('Subtitle')}
                        component="p"
                // sx={{margin: 0}}
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
        <Box className={mainCN('Wrapper')} id={'products'}>
            <Typography className={mainCN('Title')}
                        component="h2"
            >
                Услуги
            </Typography>
            <Grid container spacing={2} columns={15}>
                <ProductCard xs={15} sm={7.5} md={5}
                             title={'Базовый аудит процессов, интеграционное заключение + схема и одна консультация по внедрению'}
                             price={'Цена: от 25000 руб.'}
                >

                </ProductCard>
                <ProductCard xs={15} sm={7.5} md={5}
                             title={'Комплексный анализ и оптимизация бизнес-процессов. '}
                             price={'Цена: от 40000 руб.'}
                >
                    <p style={{margin: '0'}}>Дополнительные возможности:</p>
                    <ul style={{paddingLeft: '15px'}}>
                        <li> 1 месяц бесплатной поддержки после внедрения изменений</li>
                        <li>2 корректировки в хорошо работающие бизнес-процессы, в любое время в течение 6
                            месяцев
                        </li>
                    </ul>


                </ProductCard>
                <ProductCard xs={15} sm={7.5} md={5}
                             title={'Комплексный анализ бизнес-процессов и их оптимизация, а также подготовка стратегии для масштабирования бизнеса'}
                             price={'Цена: от 80000 руб.'}
                >
                    <p style={{margin: '0'}}>Дополнительные возможности:</p>
                    <ul style={{paddingLeft: '15px'}}>
                        <li>6 месяцев бесплатной поддержки после внедрения изменений</li>
                        <li>5 экстренных корректировок в любое время в течение 12 месяцев</li>
                        <li>4 корректировки в хорошо работающие бизнес-процессы, в любое время в течение 6 месяцев
                        </li>

                    </ul>
                </ProductCard>
            </Grid>
        </Box>
        <Box className={mainCN('Wrapper')} id={'transform-results'}>
            <Typography className={mainCN('Title')}
                        component="h2"
            >
                Результаты которые будут после трансформации
            </Typography>
            <Grid container spacing={2} columns={16}>
                <ProductCard xs={16} sm={8} md={4}
                             title={'Увеличение прибыли:'}

                >
                    За счет пересмотра и перестройки процессов в компании достигается экономия времени и ресурсов,
                    повышается эффективность и сокращаются издержки
                </ProductCard>
                <ProductCard xs={16} sm={8} md={4}
                             title={'Повышение качества:'}

                >
                    Благодаря эффективному маршруту и распределенным зонам ответственности между участниками
                    команды, повышается качество продукта, уровень удовлетворенности клиентов и средний чек
                </ProductCard>
                <ProductCard xs={16} sm={8} md={4}
                             title={'Гибкость и масштабируемость:'}

                >
                    Внедренные решения масштабируются без значительных затрат, так как известны основные действия,
                    события и лица, от которых зависит процесс
                </ProductCard>
                <ProductCard xs={16} sm={8} md={4}
                             title={'Экономия времени и ресурсов:'}
                >
                    Сотрудничество с нами позволяет вам делегировать определенные задачи и процессы, освобождая ваше
                    время и ресурсы для других важных дел
                </ProductCard>
                {/*<ProductCard xs={15} sm={7.5} md={5}*/}
                {/*             title={'Сокращение рисков:'}*/}
                {/*>*/}
                {/*    Сотрудничество с нашей компанией также помогает снизить риски, связанные с*/}
                {/*    выполнением определенных задач. Мы можем предоставить экспертную оценку и рекомендации, а также*/}
                {/*    взять на себя ответственность за выполнение определенных процессов*/}
                {/*</ProductCard>*/}


            </Grid>
        </Box>
        <Box className={mainCN('Wrapper')} id={'useful-fact'}>
            <Card sx={{
                background: 'none', boxShadow: 'none', padding: 0
            }}
            >
                <CardActions disableSpacing sx={{
                    display: 'flex', flexDirection: 'column'
                }}
                >
                    <Typography marginBottom={0}
                                fontFamily={`"Wix Madefor Display", serif`}
                                fontSize={'clamp(14px, 4vw, 19px)'}
                                variant="h6"
                                color="black"
                                paragraph
                                padding={'0 10px 0 10px'}
                                textAlign={'justify'}
                    >
                        Оптимизация бизнес-процессов – это сложный и многогранный процесс, который требует
                        тщательного анализа и планирования. Однако, если все сделано правильно, он может привести к
                        значительному улучшению эффективности работы компании. <br/> <br/>

                        Один из способов достижения оптимизации бизнес-процессов – это использование технологий
                        автоматизации. Автоматизация позволяет сократить количество ручного труда и уменьшить
                        вероятность ошибок при выполнении задач. Кроме того, она помогает ускорить процессы и
                        повысить точность результатов.
                    </Typography>
                    {!moreIconStatus && <ExpandMore
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
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <Typography
                            variant="h6" color="black"
                            fontSize={'clamp(14px, 4vw, 19px)'}
                            marginBottom={0}
                            paragraph
                            textAlign={'justify'}
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
                        {moreIconStatus && <ExpandMore
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
    </main>)
};

export default Main;
