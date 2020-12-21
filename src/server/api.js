// 此文件并非nuxt生成，它为演示项目提供数据服务接口
const Koa = require('koa');
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")({ prefix: "/api" });

// 设置cookie加密秘钥
app.keys = ["some secret", "another secret"];

const goods = [
    { id: 1, text: "商品1", price: 1000 },
    { id: 2, text: "商品2", price: 1000 }
];

const myData = {
    "return_count": 8,
    "has_more": false,
    "page_id": "/__all__/",
    "_ck": {},
    "html": null,
    "data": [{
        "media_name": "新京报政事儿",
        "ban_comment": 0,
        "abstract": "4月14日，著名法学家、新中国马克思主义法理学科奠基人之一、中国人民大学荣誉一级教授孙国华在北京因病去世，享年92岁。请点击此处输入图片描述“政事儿”（微信ID：gcxxjgzh）注意到，早在1986年，孙国华就受邀前往中南海给中央领导讲法律课，被称为“中南海讲课第一人”。",
        "image_list": [{
            "url": "http://p1.pstatp.com/list/1b840005bc59cc3e1308",
            "width": 600,
            "height": 337
        },
        {
            "url": "http://p3.pstatp.com/list/1c5c00003b81959a932b",
            "width": 640,
            "height": 360
        },
        {
            "url": "http://p3.pstatp.com/list/1c5b00019cab7eb2a363",
            "width": 400,
            "height": 225
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "news_politics",
        "has_m3u8_video": 0,
        "keywords": "朝阳大学,茶花女,梦幻曲,法理学,法学研究,共和国部长访谈录,致艾丽丝,胡耀邦,孙国华,邹瑜",
        "display_dt": 1492330955,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 0,
        "title": "在中南海讲课的第一人为何是他？",
        "source_icon_style": 5,
        "tip": 1,
        "has_video": false,
        "share_url": "http://toutiao.com/a6409509712958210305/?iid=0&app=news_article",
        "source": "新京报政事儿",
        "comment_count": 0,
        "article_url": "http://toutiao.com/group/6409509712958210305/",
        "publish_time": 1492330955,
        "group_flags": 0,
        "gallary_image_count": 5,
        "tag_id": "6409509712958210305",
        "source_url": "/i6409512644834755074/",
        "display_url": "http://toutiao.com/group/6409509712958210305/",
        "is_stick": false,
        "item_id": "6409512644834755074",
        "repin_count": 0,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=4644596221",
        "level": 0,
        "digg_count": 0,
        "behot_time": 1492332115,
        "hot": 1,
        "cursor": 1492332115999,
        "url": "http://toutiao.com/group/6409509712958210305/",
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p1.pstatp.com/large/5677/4633951464",
            "media_id": 4644596221,
            "name": "新京报政事儿",
            "user_verified": true
        },
        "group_id": "6409509712958210305"
    },
    {
        "media_name": "历史五千年",
        "ban_comment": 0,
        "abstract": "",
        "image_list": [{
            "url": "http://p3.pstatp.com/list/18a5001294b59abaacc7",
            "width": 303,
            "height": 170
        },
        {
            "url": "http://p3.pstatp.com/list/18a1001194d584439be3",
            "width": 395,
            "height": 222
        },
        {
            "url": "http://p3.pstatp.com/list/17810007cb46a26b112a",
            "width": 480,
            "height": 270
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "news",
        "has_m3u8_video": 0,
        "keywords": "喜上眉梢,小家伙,蒙古族,鲍喜顺,夏淑娟",
        "display_dt": 1490233459,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 64,
        "title": "全球第一高男子娶妻育子全过程",
        "source_icon_style": 2,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6400500512709738754/?iid=0&app=news_article",
        "source": "历史五千年",
        "comment_count": 2797,
        "article_url": "http://toutiao.com/group/6400500512709738754/",
        "publish_time": 1490233459,
        "group_flags": 131072,
        "gallary_image_count": 20,
        "tag_id": "6400500512709738754",
        "source_url": "/i6400217585245225474/",
        "display_url": "http://toutiao.com/group/6400500512709738754/",
        "is_stick": false,
        "item_id": "6400217585245225474",
        "repin_count": 23608,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=6819429737",
        "level": 0,
        "digg_count": 184,
        "behot_time": 1492332113,
        "hot": 0,
        "cursor": 1492332113999,
        "url": "http://toutiao.com/group/6400500512709738754/",
        "like_count": 184,
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p3.pstatp.com/large/97d0008006c7361b773",
            "media_id": 6885176165,
            "name": "历史五千年",
            "user_verified": false
        },
        "group_id": "6400500512709738754"
    },
    {
        "media_name": "大华网",
        "ban_comment": 0,
        "abstract": "本报讯（记者 蔡晓丹 摄影报道）昨天上午，市社保局及各分局在全市范围内统一举行主题为“转作风 扬正气 优服务 惠民生”的作风建设年活动宣誓承诺仪式暨社保业务咨询活动（如图），加强社保经办政策宣传，面对面解决群众的社保问题。",
        "image_list": [],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "tag": "news_society",
        "has_m3u8_video": 0,
        "keywords": "社保局,离退休人员,资格认证,养老金,社保",
        "display_dt": 1492305863,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 4,
        "title": "灵活就业人员领养老金条件放宽",
        "source_icon_style": 2,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/group/6409400902851887362/?iid=0&app=news_article",
        "source": "大华网",
        "comment_count": 173,
        "article_url": "http://www.dahuawang.com/gundong/showfirst1.asp?CNo=1101&ID=125263",
        "publish_time": 1492305863,
        "group_flags": 0,
        "tag_id": "6409400902851887362",
        "source_url": "/i6409404880649191937/",
        "display_url": "http://toutiao.com/group/6409400902851887362/",
        "is_stick": false,
        "item_id": "6409404880649191937",
        "repin_count": 1224,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=52121958496",
        "level": 0,
        "digg_count": 7,
        "behot_time": 1492332111,
        "hot": 0,
        "cursor": 1492332111999,
        "url": "http://www.dahuawang.com/gundong/showfirst1.asp?CNo=1101&ID=125263",
        "like_count": 7,
        "user_repin": 0,
        "has_image": false,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p9.pstatp.com/large/106c00072cc262572a1e",
            "media_id": 52121958496,
            "name": "大华网",
            "user_verified": false
        },
        "group_id": "6409400902851887362"
    },
    {
        "log_extra": "{\"rit\": 1, \"convert_id\": 0, \"req_id\": \"18476333092332115291\", \"ad_price\": \"WPDP6wAGHclY8M_rAAYdyZjz6qWJKXLlihmh_A\"}",
        "ban_comment": 1,
        "abstract": "",
        "image_list": [{
            "url": "http://p3.pstatp.com/list/1aa3000ae6446a149d46",
            "width": 228,
            "height": 128
        },
        {
            "url": "http://p3.pstatp.com/list/19480016d2380f04e469",
            "width": 228,
            "height": 128
        },
        {
            "url": "http://p2.pstatp.com/list/1aa3000ae6f23c61dc0f",
            "width": 228,
            "height": 128
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 1,
        "more_mode": true,
        "tag": "ad",
        "display_info": "小户型收纳不够？全屋家具合理定制，轻松多出个储藏室",
        "has_m3u8_video": 0,
        "display_dt": 1492051961,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "expire_seconds": 315509416,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 0,
        "title": "小户型收纳不够？全屋家具合理定制，轻松多出个储藏室",
        "source_icon_style": 3,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6408314377061007617/?iid=0&app=news_article&ad_id=59055448694&cid=59056284813&req_id=18476333092332115291",
        "label": "广告",
        "source": "意罗尼家居",
        "comment_count": 0,
        "article_url": "http://ad.toutiao.com/tetris/page/52202093182/?ad_id=59055448694&cid=59056284813&req_id=18476333092332115291",
        "publish_time": 1492051961,
        "ad_id": 59056284813,
        "group_flags": 0,
        "has_image": false,
        "tag_id": "6408314377061007617",
        "source_url": "/item/6408314377061007617/",
        "display_url": "http://ad.toutiao.com/tetris/page/52202093182/?ad_id=59055448694&cid=59056284813&req_id=18476333092332115291",
        "is_stick": false,
        "item_id": "6408314377061007617",
        "repin_count": 30,
        "cell_flag": 11,
        "source_open_url": "sslocal://search?from=feed_source&keyword=%E6%84%8F%E7%BD%97%E5%B0%BC%E5%AE%B6%E5%B1%85",
        "level": 0,
        "digg_count": 0,
        "behot_time": 1492332109,
        "hot": 0,
        "cursor": 1492332109999,
        "url": "http://ad.toutiao.com/tetris/page/52202093182/?ad_id=59055448694&cid=59056284813&req_id=18476333092332115291",
        "ad_label": "广告",
        "user_repin": 0,
        "label_style": 3,
        "video_style": 0,
        "group_id": "6408314377061007617"
    },
    {
        "media_name": "樱桃小邋遢biu",
        "ban_comment": 0,
        "abstract": "据爆料：黄晓明最近和家人、妻儿一起到美国度假，14日返程时被在北京机场的网友拍到。黄晓明怀里紧紧抱着儿子“小海绵”，并不时转头回看跟在身后的老婆Angelababy，这过程让人感觉这一家子好幸福。",
        "image_list": [{
            "url": "http://p9.pstatp.com/list/1c5b0000c57279f62b12",
            "width": 600,
            "height": 337
        },
        {
            "url": "http://p1.pstatp.com/list/1b81000655f3198cc736",
            "width": 600,
            "height": 336
        },
        {
            "url": "http://p9.pstatp.com/list/1b830000bfda51984463",
            "width": 600,
            "height": 337
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "news_entertainment",
        "has_m3u8_video": 0,
        "keywords": "情侣装,黄晓明,海绵,angelababy,北京机场,Angelababy",
        "display_dt": 1492269252,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 1,
        "title": "黄晓明紧抱“小海绵”现身机场，baby紧随其后",
        "source_icon_style": 2,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6409243506279268610/?iid=0&app=news_article",
        "source": "樱桃小邋遢biu",
        "comment_count": 57,
        "article_url": "http://toutiao.com/group/6409243506279268610/",
        "publish_time": 1492269252,
        "group_flags": 0,
        "gallary_image_count": 4,
        "tag_id": "6409243506279268610",
        "source_url": "/i6409247635986711041/",
        "display_url": "http://toutiao.com/group/6409243506279268610/",
        "is_stick": false,
        "item_id": "6409247635986711041",
        "repin_count": 280,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=55186020545",
        "level": 0,
        "digg_count": 10,
        "behot_time": 1492332107,
        "hot": 0,
        "cursor": 1492332107999,
        "url": "http://toutiao.com/group/6409243506279268610/",
        "like_count": 10,
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p3.pstatp.com/large/150d00113261b0b5ef92",
            "media_id": 1558473678318593,
            "name": "樱桃小邋遢biu",
            "user_verified": false
        },
        "group_id": "6409243506279268610"
    },
    {
        "media_name": "娱乐火锅",
        "ban_comment": 0,
        "abstract": "不知道大家有没看过由唐嫣、张檬、戚薇、邱泽、陈楚河等人主演的偶像剧《夏家三千金》，这部剧就算放到现在，也是一部高颜值不过时的电视剧。当年张檬、戚薇、唐嫣等人吸粉无数，不过这几年的娱乐圈沉浮，三千金同人不同命！大姐杨真真是由张檬饰演，她是第一女主角。",
        "image_list": [{
            "url": "http://p3.pstatp.com/list/1bf50008ab2e8c2b6ffc",
            "width": 430,
            "height": 241
        },
        {
            "url": "http://p2.pstatp.com/list/1bf30008ac8f7cb493b9",
            "width": 894,
            "height": 502
        },
        {
            "url": "http://p1.pstatp.com/list/1bf30008ac94a26f8723",
            "width": 1101,
            "height": 619
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "news_entertainment",
        "has_m3u8_video": 0,
        "keywords": "锦绣未央,李承铉,何以笙箫默,天涯明月刀,活色生香,胜女的代价,戚薇,唐嫣,陈楚河,美人无泪,我是杜拉拉,你好乔安,克拉恋人,张檬,夏家三千金",
        "display_dt": 1492252637,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 2,
        "title": "夏家三千金：大姐整容失败、二姐嫁给韩国人、小妹成流量小花",
        "source_icon_style": 5,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6409172096812024065/?iid=0&app=news_article",
        "source": "娱乐火锅",
        "comment_count": 118,
        "article_url": "http://toutiao.com/group/6409172096812024065/",
        "publish_time": 1492252637,
        "group_flags": 0,
        "gallary_image_count": 7,
        "tag_id": "6409172096812024065",
        "source_url": "/i6409173231214789122/",
        "display_url": "http://toutiao.com/group/6409172096812024065/",
        "is_stick": false,
        "item_id": "6409173231214789122",
        "repin_count": 1069,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=52235195724",
        "level": 0,
        "digg_count": 42,
        "behot_time": 1492332105,
        "hot": 0,
        "cursor": 1492332105999,
        "url": "http://toutiao.com/group/6409172096812024065/",
        "like_count": 42,
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p1.pstatp.com/large/ef60010ac3d49fb665c",
            "media_id": 52235340343,
            "name": "娱乐火锅",
            "user_verified": false
        },
        "group_id": "6409172096812024065"
    },
    {
        "media_name": "回看历史辩真假",
        "ban_comment": 0,
        "abstract": "在古代封建社会，尤其是在儒家思想统治下，所谓礼不下平民，刑不上大夫。更何况是极其无尊严的裸刑了。而下面这位堂堂一国皇后，作战十分勇猛，被抓后惨遭凌辱，行刑后被斩首，成为唯一一个受裸刑而死的皇后。苻登只是前秦皇帝苻坚的族孙，他本来是没有资格继承皇位的。",
        "image_list": [{
            "url": "http://p3.pstatp.com/list/1bf6000850c47aec6722",
            "width": 515,
            "height": 289
        },
        {
            "url": "http://p3.pstatp.com/list/1bf4000a4c405d68ea78",
            "width": 413,
            "height": 232
        },
        {
            "url": "http://p3.pstatp.com/list/1bf4000a4c46697802a7",
            "width": 459,
            "height": 258
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "news_history",
        "has_m3u8_video": 0,
        "keywords": "苻登,姚苌,裸刑,毛皇后,苻坚",
        "display_dt": 1492327146,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 0,
        "title": "贵为皇后却遭裸刑 被俘后受到侮辱，年仅21岁，誓死不屈被斩首",
        "source_icon_style": 6,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6409492903277904129/?iid=0&app=news_article",
        "source": "回看历史辩真假",
        "comment_count": 0,
        "article_url": "http://toutiao.com/group/6409492903277904129/",
        "publish_time": 1492327146,
        "group_flags": 0,
        "gallary_image_count": 4,
        "tag_id": "6409492903277904129",
        "source_url": "/i6409496287388893698/",
        "display_url": "http://toutiao.com/group/6409492903277904129/",
        "is_stick": false,
        "item_id": "6409496287388893698",
        "repin_count": 1,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=54219333279",
        "level": 0,
        "digg_count": 0,
        "behot_time": 1492332103,
        "hot": 0,
        "cursor": 1492332103999,
        "url": "http://toutiao.com/group/6409492903277904129/",
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p9.pstatp.com/large/150d000395a800ae1fe6",
            "media_id": 1556374473510913,
            "name": "回看历史辩真假",
            "user_verified": false
        },
        "group_id": "6409492903277904129"
    },
    {
        "media_name": "微言薄语",
        "ban_comment": 0,
        "abstract": "",
        "image_list": [{
            "url": "http://p1.pstatp.com/list/1a6e000477b9f24c56b1",
            "width": 1790,
            "height": 1006
        },
        {
            "url": "http://p3.pstatp.com/list/1a6e000477bd4f21f146",
            "width": 1911,
            "height": 1074
        },
        {
            "url": "http://p1.pstatp.com/list/1a6c0008f3ef1fe75fb7",
            "width": 1912,
            "height": 1075
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "article_type": 0,
        "more_mode": true,
        "tag": "gallery_story",
        "has_m3u8_video": 0,
        "keywords": "乐天派,赵宝贵,收羊绒,告诉作者,老两口",
        "display_dt": 1491456522,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 7,
        "title": "6旬夫妻弃别墅住石屋放羊：年入15万",
        "source_icon_style": 2,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6405702814219337985/?iid=0&app=news_article",
        "source": "微言薄语",
        "comment_count": 604,
        "article_url": "http://toutiao.com/group/6405702814219337985/",
        "publish_time": 1491456522,
        "group_flags": 131072,
        "gallary_image_count": 13,
        "tag_id": "6405702814219337985",
        "source_url": "/i6405756985878249985/",
        "display_url": "http://toutiao.com/group/6405702814219337985/",
        "is_stick": false,
        "item_id": "6405756985878249985",
        "repin_count": 5491,
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=6585774392",
        "level": 0,
        "digg_count": 79,
        "behot_time": 1492332101,
        "hot": 0,
        "cursor": 1492332101999,
        "url": "http://toutiao.com/group/6405702814219337985/",
        "like_count": 79,
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p3.pstatp.com/large/6cb001f0ae112078ebd",
            "media_id": 6586018905,
            "name": "微言薄语",
            "user_verified": true
        },
        "group_id": "6405702814219337985"
    },
    {
        "media_name": "微言薄语",
        "ban_comment": 0,
        "abstract": "",
        "image_list": [{
            "url": "http://p1.pstatp.com/list/1a6e000477b9f24c56b1",
            "width": 1790,
            "height": 1006
        },
        {
            "url": "http://p3.pstatp.com/list/1a6e000477bd4f21f146",
            "width": 1911,
            "height": 1074
        },
        {
            "url": "http://p1.pstatp.com/list/1a6c0008f3ef1fe75fb7",
            "width": 1912,
            "height": 1075
        }
        ],
        "collected": true,
        "datetime": "2017-04-16 16:41",
        "honey": true,
        "article_type": 0,
        "more_mode": true,
        "tag": "gallery_story",
        "has_m3u8_video": 0,
        "keywords": "乐天派,赵宝贵,收羊绒,告诉作者,老两口",
        "display_dt": 1491456522,
        "has_mp4_video": 0,
        "aggr_type": 1,
        "cell_type": 0,
        "article_sub_type": 0,
        "bury_count": 7,
        "title": "6旬夫妻弃别墅住石屋放羊：年入15万",
        "source_icon_style": 2,
        "tip": 0,
        "has_video": false,
        "share_url": "http://toutiao.com/a6405702814219337985/?iid=0&app=news_article",
        "source": "微言薄语",
        "comment_count": 604,
        "article_url": "http://toutiao.com/group/6409494900769423617/?_as_=1492332115",
        "publish_time": 1491456522,
        "group_flags": 131072,
        "gallary_image_count": 13,
        "tag_id": "6405702814219337985",
        "source_url": "/group/6409494900769423617/?_as_1492332115",
        "is_stick": false,
        "item_id": "6409496402761613825",
        "level": 0,
        "display_url": "http://toutiao.com/group/6409494900769423617/?_as_=1492332115",
        "cell_flag": 11,
        "source_open_url": "sslocal://profile?uid=6585774392",
        "repin_count": 5491,
        "digg_count": 79,
        "behot_time": 1492332101,
        "hot": 0,
        "cursor": 1492332101999,
        "url": "http://toutiao.com/group/6409494900769423617/?_as_=1492332115",
        "like_count": 79,
        "user_repin": 0,
        "has_image": true,
        "video_style": 0,
        "media_info": {
            "avatar_url": "http://p3.pstatp.com/large/6cb001f0ae112078ebd",
            "media_id": 6586018905,
            "name": "微言薄语",
            "user_verified": true
        },
        "group_id": "6409494900769423617"
    }
    ]
}

router.get("/my-data", ctx => {
    ctx.body = {
        ok: 1,
        myData
    }
})

const selfCommentData = {
    "return_count": 11,
    "has_more": false,
    "page_id": "/__all__/",
    "_ck": {},
    "html": null,
    "data": [
        {
            "comment": "股市风险大啊",
            "good": "4",
            "media_name": "湖北卫视天生我财",
            "ban_comment": 0,
            "abstract": "往日龙头成骄兵，一夜风雨便凋零。跌停封板伤人心，更怕退潮无行情。昨日雄安新区概念板块大幅下挫，指数跌幅达5.48%。前期涨停的板块龙头银龙股份，也低开低走，尾盘大单封住跌停板，数字政通、金隅股份等也纷纷加速下跌直至跌停板，雄安新区的大跌是否意味着退潮？后市该如何操作？",
            "image_list": [{
                "url": "http://p3.pstatp.com/list/1c610005291b05b163e5",
                "width": 960,
                "height": 540
            },
            {
                "url": "http://p3.pstatp.com/list/1c5e0005302b4c2c2e46",
                "width": 960,
                "height": 540
            },
            {
                "url": "http://p3.pstatp.com/list/1c5e000530f7d0d56f8b",
                "width": 960,
                "height": 540
            }
            ],
            "datetime": "2017-04-21 13:44",
            "article_type": 0,
            "more_mode": true,
            "tag": "news_finance",
            "has_m3u8_video": 0,
            "keywords": "雄安新区,青龙管业,数字政通,金隅股份,冀东水泥,碧水源,先河环保,海能达,获利盘",
            "display_dt": 1492740785,
            "has_mp4_video": 0,
            "aggr_type": 1,
            "cell_type": 0,
            "article_sub_type": 0,
            "bury_count": 0,
            "title": "最榜单：最快的凋零——雄安新区",
            "source_icon_style": 5,
            "tip": 0,
            "has_video": false,
            "share_url": "http://toutiao.com/a6411270757729681666/?iid=0&app=news_article",
            "source": "湖北卫视天生我财",
            "comment_count": 0,
            "article_url": "http://toutiao.com/group/6411270757729681666/",
            "publish_time": 1492740785,
            "group_flags": 0,
            "gallary_image_count": 9,
            "tag_id": "6411270757729681666",
            "source_url": "/i6411272851973734913/",
            "display_url": "http://toutiao.com/group/6411270757729681666/",
            "is_stick": false,
            "item_id": "6411272851973734913",
            "repin_count": 355,
            "cell_flag": 11,
            "source_open_url": "sslocal://profile?uid=6309910186",
            "level": 0,
            "digg_count": 0,
            "behot_time": 1492753459,
            "hot": 0,
            "cursor": 1492753459999,
            "url": "http://toutiao.com/group/6411270757729681666/",
            "user_repin": 0,
            "has_image": true,
            "video_style": 0,
            "media_info": {
                "avatar_url": "http://p3.pstatp.com/large/411000a242fa07fb94f",
                "media_id": 6393824076,
                "name": "湖北卫视天生我财",
                "user_verified": false
            },
            "group_id": "6411270757729681666"
        },
        {
            "comment": "6666",
            "good": "6",
            "media_name": "樱桃小邋遢biu",
            "ban_comment": 0,
            "abstract": "据爆料：黄晓明最近和家人、妻儿一起到美国度假，14日返程时被在北京机场的网友拍到。黄晓明怀里紧紧抱着儿子“小海绵”，并不时转头回看跟在身后的老婆Angelababy，这过程让人感觉这一家子好幸福。",
            "image_list": [{
                "url": "http://p9.pstatp.com/list/1c5b0000c57279f62b12",
                "width": 600,
                "height": 337
            },
            {
                "url": "http://p1.pstatp.com/list/1b81000655f3198cc736",
                "width": 600,
                "height": 336
            },
            {
                "url": "http://p9.pstatp.com/list/1b830000bfda51984463",
                "width": 600,
                "height": 337
            }
            ],
            "collected": true,
            "datetime": "2017-04-16 16:41",
            "article_type": 0,
            "more_mode": true,
            "tag": "news_entertainment",
            "has_m3u8_video": 0,
            "keywords": "情侣装,黄晓明,海绵,angelababy,北京机场,Angelababy",
            "display_dt": 1492269252,
            "has_mp4_video": 0,
            "aggr_type": 1,
            "cell_type": 0,
            "article_sub_type": 0,
            "bury_count": 1,
            "title": "黄晓明紧抱“小海绵”现身机场，baby紧随其后",
            "source_icon_style": 2,
            "tip": 0,
            "has_video": false,
            "share_url": "http://toutiao.com/a6409243506279268610/?iid=0&app=news_article",
            "source": "樱桃小邋遢biu",
            "comment_count": 57,
            "article_url": "http://toutiao.com/group/6409243506279268610/",
            "publish_time": 1492269252,
            "group_flags": 0,
            "gallary_image_count": 4,
            "tag_id": "6409243506279268610",
            "source_url": "/i6409247635986711041/",
            "display_url": "http://toutiao.com/group/6409243506279268610/",
            "is_stick": false,
            "item_id": "6409247635986711041",
            "repin_count": 280,
            "cell_flag": 11,
            "source_open_url": "sslocal://profile?uid=55186020545",
            "level": 0,
            "digg_count": 10,
            "behot_time": 1492332107,
            "hot": 0,
            "cursor": 1492332107999,
            "url": "http://toutiao.com/group/6409243506279268610/",
            "like_count": 10,
            "user_repin": 0,
            "has_image": true,
            "video_style": 0,
            "media_info": {
                "avatar_url": "http://p3.pstatp.com/large/150d00113261b0b5ef92",
                "media_id": 1558473678318593,
                "name": "樱桃小邋遢biu",
                "user_verified": false
            },
            "group_id": "6409243506279268610"
        }
    ]
}

router.get("/self-comment", ctx => {
    ctx.body = {
        ok: 1,
        selfCommentData
    }
})

// 配置路由
// 获取产品列表
router.get("/goods", ctx => {
    ctx.body = {
        ok: 1,
        goods
    };
});

// 产品详情
router.get("/detail", ctx => {
    ctx.body = {
        ok: 1,
        data: goods.find(good => good.id == ctx.query.id)
    };
});

// 登录
router.post("/login", ctx => {
    const user = ctx.request.body;
    if (user.username === "jerry" && user.password === "123") {
        // 将token存入cookie
        const token = 'a mock token';
        ctx.cookies.set('token', token);
        ctx.body = { ok: 1, token };
    } else {
        ctx.body = { ok: 0 };
    }
});

// 解析post数据并注册路由
app.use(bodyparser());
// 注册路由
app.use(router.routes());

app.listen(8080, () => console.log('api服务已启动'))