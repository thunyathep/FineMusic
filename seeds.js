const   mongoose      = require("mongoose"),
        User          = require("./models/user"),
        Music         = require('./models/music');


const data = [
    {
        music   : 'Cheating is a crime',
        artist  : 'Takayan',
        musicImage  : `https://i1.sndcdn.com/artworks-OmTzAWYPp7QHKDzP-SVsXzA-t500x500.jpg`,
        lyric   : `uwaki ga barete "shinitai"?
        kocchi no hou ga hyakubai "shinitai"
        uso darake no dasai benkai
        darii suu kagetsu no Fake Love
        sazokashi ii kibun datta yo ne?
        suunin no aite wo moteasonde
        yarikaeshite mo imi ga nai no
        itami ka kurushimi ukero kouishou
        
        genin toka jizen ni itte kurereba naosu no ni
        kao toka iu nara tsukiatta imi ga wakaranai
        sefure tsukureyo saisho kara ai no nai hanpa na seikoui
        baka janai? hashi kara kao de eranden nara
        "naimen ga daiji" toka itteta ja nee ka
        kisetsu utsurikawari kisu no aite mo utsurikawari
        tsukeru kusuri nante nai shinanakereba naori wa shinai

        risou no aite no sutokku aru no wa sugoi kedo
        tokkae hikkae yori ka ichizu ga kakko ii yo
        somosomo suteki na renai tte nani?
        "aki" to "shitto shichau you na kanjou" tte nani?
        kono saki ikite iku meritto tte nani?
        kongo, kodomo wo undeku imi tte nani?
        a! kizuitara mechakucha yanderu
        omae no sei nomimakuru sake
        zenbu satotte fuwafuwa OD
        inochi to hikikaeshite kousei shiro
        
        kurikuri mazu hagitoru
        tamatama ochinchin biroon
        ashita mo ikiyou! anata no tame ni ikiyou!
        pakupaku pinku noumiso rebaa oishii yoon!
        
        daisuki na no wa kawaranai kedo ikari dake ga ima osamaranai
        kanjou makase de gomen nasai ima kara oshieru "hontou no ai"
        
        uwaki ga barete "shinitai"?
        kocchi no hou ga hyakubai "shinitai"
        uso darake no dasai benkai
        darii suu kagetsu no Fake Love
        sazokashi ii kibun datta yo ne?
        suunin no aite wo moteasonde
        yarikaeshite mo imi ga nai no
        itami ka kurushimi ukero kouishou`,
        filemusic   : '/music/cheating_is_a_crime.mp3'
    },
    {
        music   : 'Just disappear',
        artist  : 'Takayan',
        musicImage  : 'https://images.genius.com/925c2cba743ff9e35ef03de5cdff9623.1000x1000x1.png',
        lyric   : `Kiete nakunaru dake
        Waratte mo naite mo onaji datte
        Saa ikiro fushigi na mujun wo
        Kanjinaku nakunaru made
        
        Douzo okatte ni mi sute sono me ni
        "uso" "nayami" "jibun" wo seotte
        Kane seiyoku jinkaku wo kaeru
        Kangaetakunai mou baibai
        Jikan wasure ima dake wa baibai nan da
        Hito to hito wa shosen dourui nanoni
        Naze ka tachiba muda ni maunto toritagaru
        "damareya" kokoro de zutto sakenderu
        Chippoke na hitori wa mou akireteru
        Ano hi ni anata wa "aeru" to kaita
        Dareka ni mitorete sa aezu konai ban


        Ano basho jibun dake ga heitai
        Kibou. tasuke wa kokoro janai sumaho no gamen no naka
        Oeraisan yami fukai jan
        Sekai sukuu no wa "ero" ka?
        Shindeiku imi wo oshietekure
        Sakanobotte mo motomoto imi mo naku tada umareta
        Tanin ni tsunerarete shizen to kuzureta
        "hontou no kimochi wakatte yo" naku
        "ibasho imada mitsukannai"
        Tte iu ka sore sagasu no mo imi nakunai?
        Daitai, fubyoudou sugin da yo zenin shiawase ni natte shimae

        Saa okatte ni ikite sono me ni
        "kako" "negai" "jibun" wo seotte
        Keno urami jinkaku wo kaeru
        Kangaetakunai mou baibai
        Jikan wasure ima dake wa baibai nan da

        (I want you) akiretemashita guchi mo uragiri mo kyoumi ga nai ne
        (aishiteru) mayou mama hisshi ni ikiru kimi ga ichiban suteki!
        Rakushou datte! yokubatte motto!
        Jibun de jibun wo tometeru to omou no
        Mada isogu hitsuyou wa nai kara sa
        Kowakunai yo issho ni wataru aka shingou`,
        filemusic   :'/music/just_disappear.mp3'
    },
    {
        music   :`what's the meaning of living`,
        artist  : 'Takayan',
        musicImage  : 'https://lh3.googleusercontent.com/-EzqO0tY53Oc/X4SV9OLHRkI/AAAAAAAANLs/fsmGH4r5fwAyUhBaOfeRIQUj3-R92ORjQCLcBGAsYHQ/s1600/1602524656775429-0.png',
        lyric   : `kireru imi mo nazeka kanashii imi mo
        muri ni warau imi mo wakan'naiya kudan'naiya
        kuroi ashita mo heibonde mobu no zako
        sayonara shitai heboi yowai kowai shinai
        ikiru
        
        ma~a kore demo iin datte My girl
        kore de iin datte My bro
        mada iki tte choushininotte
        jishin kajoude shinu hodo baka ni nareba ii
        
        Your life My life hajimekara imi nante nai sa
        koukai mondaiji jinrui Heraru mina ga kyoudai
        kokoro kowashi sute rareta hibi mo saikouna imi de nagusameru yo
        ikita ue, soba ni iru. Mikaeseba ii yo
        
        maunto chu no aitsu to onaji janai
        koroshitai joushi to onaji janai
        
        ma~a kore demo iin datte My girl
        kore de iin datte My bro
        mada iki tte choushininotte
        jishin kajoude shinu hodo baka ni nareba ii
        
        Your life My life hajimekara imi nante nai sa
        koukai mondaiji jinrui Heraru mina ga kyoudai
        kokoro kowashi sute rareta hibi mo saikouna imi de nagusameru yo
        ikita ue, soba ni iru. Mikaeseba ii yo`,

        filemusic   : '/music/meaning_of_live.mp3'
    },
    {
        music   : 'KaiKai Kitan',
        artist  : 'Eve',
        musicImage  : 'https://i1.sndcdn.com/artworks-M5wELBaUwhiWLnIJ-zoOT8Q-t500x500.jpg',
        lyric   : `Uzou muzou hito no nari
        Kyosei shinshou jingai mononoke mitai da
        
        Kyoshin tankai inochi yadoshi
        Ato wa pappara pa na nakami naki ningen
        
        Yoseru kitai fubyoudou na jinsei
        Sainou mo nai daijou hi nichijou ga
        
        Onshin byoudou ni botsu kosei
        Tadoru kioku boku ni
        Ibasho nado nai kara
        
        Yume no hazama de naitenaide
        Donna kao sureba ii ka wakatteru
        Dakedo mada kotaete kure yo
        
        Yami wo haratte yami wo haratte
        Yoru no tobari ga oritara aizu da
        Aitai shite mawaru kanjousen
        Zaregoto nado wa hakisute ike to
        
        Mada tomenaide mada tomenaide
        Dare yori mo satoku aru machi ni umareshi kono shoutai wo
        Ima wa tada noroi norowareta boku no mirai wo souzou shite
        Hashitte koronde kienai itami daite wa
        Sekai ga matteru kono isshun wo
        
        Jojouteki kanjou ga yuraide iku bagu
        Juujun ni shitagatta kekkan no batsu
        Shishu sentaku shika nai ai ni jouki
        Koe mo dasenai mama
        
        Kugutsu na chikai no naki hyakki yakou
        Jujutsu naki naraku no hate made mo
        
        Gokuraku oujou genjitsu kette naide inochi wo nagedasanaide
        
        Uchi no morosa ni hitatte
        Donna kao sureba ii ka wakannai yo
        Ima wa tada kotaete kure yo
        
        Gojou wo toite gojou wo toite
        Futashika na koe wo tsumugu idea
        Sousai shite mawaru kanjousen
        Sono saki ni ima tachiagaru te wo
        
        Tada oikakete tada oikakete
        Dare yori mo tsuyoku aritai to negau kimi no unmei sura
        Ima wa tada honogurai yoru no soko ni
        Fukaku fukaku ochikonde
        
        Bukakkou ni mieta kai
        Kore ga ima no boku nan da
        Nanimono ni mo narenai dake no shikabane da warae yo
        
        Me no mae no subete kara nigeru koto sae yameta
        Imeeji wo kurikaeshi
        Souzou no saki wo ike to
               
        Yami wo haratte yami wo haratte
        Yoru no tobari ga oritara aizu da
        Aitai shite mawaru kanjou sen
        Zaregoto nado wa hakisute ike to        
        
        Mada tomenaide mada tomenaide
        Dare yori mo satoku aru machi ni umareshi kono shoutai wo
        Ima wa tada noroi norowareta boku no mirai wo souzou shite
        Hashitte koronde kienai itami daite wa
        Sekai ga matteru kono isshun wo`,
        filemusic   :'/music/kaikaikitan.mp3'
    },
    {
        music   :`Dramaturgy`,
        artist  : 'Eve',
        musicImage  : 'https://c-fa.cdn.smule.com/rs-s78/arr/cd/54/11cf7ec7-ad45-4cca-9777-c8b2d3fa27b8.jpg',
        lyric   : `Atama de wakatte wa nageita
        Korogatte ku yousu wo waratta
        Sabishii toka ai toka wakannai
        Ningen no katachi wa nage dashita nda
        Kakae kirenai Kotoba darake
        no sonzai shoumei wo
        
        Kono chiisana hako kara de rannai
        Kidzuitara saigo nige dashitai
        Bokura zen in enjite ita nda
        ENDO ROURU ni mukatte yuku nda
        Saa minna hisshi ni yaku wo
        enjite boukansha nante inai no sa
        
        ” Watashi ” nante nai no
        Doko ni datte inai yo
        Zutto boku wa Nanimono ni mo narenaide
        
        Bokura ima Saa Saa Kurai ate
        Enchousen SARENDAA shite
        MEE DEE Awai aisou
        Tare nagashi Gen no aizou
        DORAMACHIKKU na tenkai
        wo dokka kitai shite ndarou
        
        Kimi mo YES YES Iki wo nonde
        
        Saihai wa Soko ni a nda
        
        HEDDO SHOTTO Sawagu omoi mo
        Sono kokoro Uchi nuite Saa
        Mada minu ito wo hiite
        Kuromaku no odemashi sa
        Sono me ni utsuru no wa
        
        Furetara kowarete shimatta
        Machigatte ku yousu wo damatta
        Bokura zen in mukude ari mashita
        Itsu no mani yara kaibutsu ni natta nda
        Sono subete wo koutei
        shinaito mae ni susumenai kai
        
        『Maa kimi ni wa kitto murina nda』
        「Dakara kimi ni wa kitto murina nda」
        Itsu no mani yara gaiya ni itanda
        Sonna gaya bakkari tobashite kita nda
        Minna hisshi ni jibun wo mamotte
        sukui no te wo matteru no sa
        
        Kangae taku wa nai yo
        Baka ni natte itai mon
        Zutto boku wa Nanimono ni mo narenaide
        
        Dakara ima Zensen jou ni tatte
        Sono hata wa takaku matte
        Ressei Tayoru aibou
        Kotoba sura hitsuyou nai yo
        DORAMACHIKKU na tenkai wa
        DOTTO HIITO shite kudarou
        
        Kimi no YES YES Iki wo nonde
        
        Saikai wo chikai ate
        
        WAN CHANSU shika nai boku no
        Isshun wo kakeru no sa
        KURAIMAKKUSU mitai
        na Te ni ase wo nigiru no sa
        Potsuri to naita
        
        Kakushite kita hontou wa dokoni mo nai
        Waratte kita yatsura ni ibasho wanai
        Omoi dashite poitte shite kanjou wanai
        Nagashita namida riyuu nante nai
        
        Yasashi sa ni ondo mo kanji rarenai
        Sashi nobeta te ni utagai shika nai
        Ana ga suite ai wa tarete
        shimai ni natta nda
        Taore souna boku wo nozoki konda nda
        
        Akirame kaketa hito no mae ni anta wa
        Itsumo azawarau you ni odemashi sa
        Kimi ni wa donna kaze ni mie teru n dai
        Kokyuu wo totonoete saa
        Saa
        Zutto boku wa Nanimono ni mo narenaide
        
        Bokura ima Saa Saa Kurai ate
        Enchousen SARENDAA shite
        MEE DEE Awai aisou
        Tare nagashi Gen no aizou
        DORAMACHIKKU na tenkai
        wo dokka kitai shite ndarou
        
        Kimi mo YES YES Iki wo nonde
        Saihai wa Soko ni a nda
        HEDDO SHOTTO Sawagu omoi mo
        Sono kokoro Uchi nuite Saa
        Mada minu ito wo hiite
        Kuromaku no odemashi sa
        
        ” Sono me ni utsuru no wa “`,
        filemusic   : '/music/Dramaturgy.mp3'
    },
    {
        music   : 'Lanst Dance',
        artist  : 'Eve',
        musicImage  : 'https://images.genius.com/b3080eb4062fb32b405000edc377fed2.1000x1000x1.png',
        lyric   : `Kokoni habikoru matenrou
        Kimi no tashikana me wo tsundekita
        
        Kanaetai mono subete ubaisaratte wa
        Boku wo nejimageteku
        
        Kachikan chigai kirai na aitsu wa
        Kokkei nante warai atte
        Jouhin na kotoba nose atte matte asette agaita
        Sesse chie wo shibotte sesse yoku wo kaite
        EGO ni ochite yuke
        
        Anata wa itta shoumouhinsa
        Dakedo watashi wa mada kangaeteru wa
        Itsuka mata kou yatte
        Odotte yatte kurenai ka
        Shinki wo matotta shounen shoujo

        Usa wo harashita YES MAN kanja
        Daremo nani mono demo nai mono
        Shinni wo shireba saigo ni naru nara sa
        Shita ga kawaku made hanasou ze

        Kyousen wo hatte jibun wo hoshinatta
        Kyougen wo haite maboroshi ni natta

        Baka ni natte chuu wo matte
        Shitara mo kowarete shimaimashita

        Junsui de toumei na shounen no sa
        Kanjou ni ma wo sashite yatten no sa

        Omoidashite omoidashite kangaete wa
        Tadoritsuki sae mo shinaiya

        Anata ga itta hontou no i wo
        Sekai no katasumi de kangaeteru wa

        Hie kitta uso sae mo
        Tokashite yatte kureru no nara

        Kodoku wo shitta sainojin to
        Asu wo eranda MELANCHOLY kanja

        Modorenai boku ni sayounara
        Yubi wo kuwaete naitemo muda dakara
        Itsukamata

        Saishu ressha wo matsu wa
        Anata no kaeri wa nai kedo
        Koko ni irubeki de wa nai koto
        Ima subete wo nomikome ya shinai kedo

        Tooku kara mitara anata shiawase sou ne demo
        Itakute itakute zenbu shiteru kara

        Anata wa itta shoumouhinsa
        Dakedo watashi wa mada kangaeteru wa
        Itsuka mata kou yatte
        Odotte yatte kurenai ka

        Shinki wo matotta shounen shoujo
        Usa wo harashita YES MAN kanja
        Daremo nani mono demo nai mono
        Shinni wo shireba saigo ni naru nara sa
        Shita ga kawaku made hanasou ze

        Soshite bokura itsuwa ni natte
        Ima futashikana emi wo ukabete wa
        Daremo shiranakatta monogatari wo ima
        Kimi ni hanasu kara`,
        filemusic   : '/music/Last_Dance.mp3'
    },
    {
        music   : `Raison D'etre`,
        artist  : 'Eve',
        musicImage  : 'https://i1.sndcdn.com/artworks-AGaa7UBFfn3XXIQX-AXxJnA-t500x500.jpg',
        lyric   : `Tadayou kono kuuki ni sutoppu tada mujun wo daiteiru
        Imasara mou supiido de sutaato kittatte
        Dou yattatte oitsukya shinai ze meedee
        
        
        Tsuyogari ni iyake ga sashiteiru
        Yowane mo hakenai mama de iru yowane mo hakenai mama de iru
        
        
        Sontoku no monosashi de poi tte suterare
        Yosoiki no kao shite mata yarisugosu
        Sonzai mo nai you na mon da daremo wakacchainai ya
        Kanjouron ni sugatte nante habakareba ochiru
        
        
        Dakedo yume ni mezameta kimi wa nani wo miru no
        
        
        Saitei na hi wo koete
        Saizen no naru hou e
        Dou shitan da kitai nante mou shiterarenai kara
        Sono toki wo jitto matteiru
        
        
        Aimai na shikai ni tatte
        Saigen no nai hou e
        Konna kimochi sae mo sutekirenai no nara
        Mazatte mazatte umarekawaru made
        Owaranai yume wo
        
        
        Shitagawanai koto de shika imikirawareru koto de shika
        Aseri dake de wa mitasarenai ari no mama nado misetaku wa nai ne
        
        
        Herahera to kyou mo waratteiru
        Yowane mo hakenai mama de iru yowane mo hakenai mama de iru
        
        
        Kiben ni furumau jiko anji sae
        Shinjitsu ni kodawaru hitsuyou mo nai
        Uragitte shimaisou na kyou ga kakeru kotoba mo nai na
        Konrinzai mou isshou nante habakareba ochiru
        
        
        Dakedo kotae nado mattemo kimi ni ae ya shinai to
        
        
        Aitai buki wo totte
        Kanjou no naru hou e
        Konna kimochi sae mo sutekirenai no nara
        Mazatte mazatte umarekawaru made
        Owaranai yume wo
        
        
        Tarinai mono bakari no bokura
        Gaiken dake toritsukurotta
        Tsuzukanai koto ni iradatta
        Tanin wo mikudashi warattan da
        Sou shinai to mou boku no kokoro wa kowarete shimau kara
        
        
        Hontou wa mou wakatterun da
        Kitai sarenai jinsei da
        Konkyo mo nai ano hi no you na
        Massugu na hitomi wa
        
        
        Dakedo yume ni mezameta kimi wa nani wo miru no
        
        
        Saitei na hi wo koete
        Saizen no naru hou e
        Dou shitan da kitai nante mou shiterarenai kara
        Sono toki wo jitto matteiru
        
        
        Aimai na shikai ni tatte
        Saigen no nai hou e
        Konna kimochi sae mo sutekirenai no nara
        Mazatte mazatte umarekawaru made
        Owaranai yume wo
        
        Sono saki no kimi wo`,
        filemusic   : `/music/Raison_D'etre.mp3`
    },
    {
        music   : 'Yoru ni kakeru',
        artist  : 'Yoasobi',
        musicImage  : 'https://cdns-images.dzcdn.net/images/cover/854c187b098aa81c1c50938f6c51470a/350x350.jpg',
        lyric   : `shizumu you ni tokete yuku you ni
        futari dake no sora ga hirogaru yoru ni
        
        “sayonara” dake datta
        sono hitokoto de subete ga wakatta
        hi ga shizumidashita sora to kimi no sugata
        fensugoshi ni kasanatteta
        
        hajimete atta hi kara
        boku no kokoro no subete wo ubatta
        dokoka hakanai kuuki wo matou kimi wa
        samishii me wo shitetan da
        
        itsudatte chikkutakku to
        naru sekai de nando datte sa
        fureru kokoronai kotoba urusai koe ni
        namida ga kobore sou demo
        arikitari na yorokobi kitto futari nara mitsukerareru
        
        sawagashii hibi ni waraenai kimi ni
        omoitsuku kagiri mabushii asu wo
        akenai yoru ni ochite yuku mae ni
        boku no te wo tsukande hora
        wasurete shimaitakute tojikometa hibi mo
        dakishimeta nukumori de tokasu kara
        kowakunai yo itsuka hi ga noboru made
        futari de iyou
        
        kimi ni shika mienai
        nanika wo mitsumeru kimi ga kirai da
        mitoreteiru ka no you na koi suru you na
        sonna kao ga kirai da
        
        shinjitetai kedo shinjirenai koto
        sonna no dou shitatte kitto
        kore kara datte ikutsumo atte
        sono tanbi okotte naiteku no
        soredemo kitto itsuka wa kitto bokura wa kitto
        wakariaeru sa shinjiteru yo
        
        mou iya datte tsukaretan datte
        gamushara ni sashinobeta boku no te wo furiharau kimi
        mou iya datte tsukareta yo nante
        hontou wa boku mo iitain da
        
        hora mata chikkutakku to
        naru sekai de nando datte sa
        kimi no tame ni youi shita kotoba doremo todokanai
        “owari ni shitai” da nante sa
        tsurarete kotoba ni shita toki
        kimi wa hajimete waratta
        
        sawagashii hibi ni waraenakunatteita
        boku no me ni utsuru kimi wa kirei da
        akenai yoru ni koboreta namida mo
        kimi no egao ni toketeku
        
        kawaranai hibi ni naiteita boku wo
        kimi wa yasashiku owari e to sasou
        shizumu you ni tokete yuku you ni
        shimitsuita kiri ga hareru
        wasurete shimaitakute tojikometa hibi ni
        sashinobete kureta kimi no te wo toru
        suzushii kaze ga sora wo oyogu you ni ima fukinukete yuku
        tsunaida te wo hanasanaide yo
        futari ima, yoru ni kakedashiteku`,
        filemusic   : '/music/Yoru_ni_kakeru.mp3'
    },
    {
        music   : 'Monster',
        artist  : 'Yoasobi',
        musicImage  : 'https://1.bp.blogspot.com/-fJ0A78Tdxo0/YAaDYBs7GdI/AAAAAAAAGZA/ojx3YWFPrIQ-a5iB3Z1W1qXv_p9QfTTbQCLcBGAsYHQ/s400/YOASOBI-Monster-Lyrics.jpg',
        lyric   : `Ah, subarashiki sekai ni kyou mo kanpai
        Machi ni tobikau waraigoe mo
        Mite minu furi shiteru dake no tsukuri mon sa
        Ki ga furesou da
        Kurakura suru hodo no ii nioi ga
        Tsun to sashita hana no oku
        Me wo samasu honnou no mama
        Kyou wa dare no ban da?
        

        Kono sekai de nani ga dekiru no ka
        Boku ni wa nani ga dekiru no ka
        Tada sono makkuro na me kara
        Namida koboreochinai you ni
        

        Ah, Negau mirai ni nando demo zutto
        Kuraitsuku
        Kono machigai darake no sekai no naka
        Kimi ni wa waratte hoshii kara
        Mou daremo kizutsukenai
        Tsuyoku tsuyoku naritain da yo
        Boku ga boku de irareru you ni
        

        Subarashiki sekai wa kyou mo antai
        Machi ni uzumaku warui hanashi mo
        Shiranai shiranai furi shite me wo sorashita
        Shouki no sata janai na
        Majime ni kikazatta koushin
        Narasu ashioto ga hazumu ikisaki wa
        Kienai kienai aji ga shimitsuiteiru
        Uragawa no sekai, ah
        

        Kiyoku tadashiku ikiru koto
        Daremo kanashimasezu ni ikiru koto
        Hamidasazu massugu ni ikiru koto
        Sore ga machigawanaide ikiru koto?
        Ari no mama ikiru koto ga seigi ka
        Damashidamashi ikiru no wa seigi ka
        Boku no aru beki sugata to wa nan da
        Hontou no boku wa nanimono nan da
        

        Oshiete kure yo
        Oshietekure yo
        

        Kyou mo
        Kotae no nai sekai no naka de
        Ah, negatterun da yo
        Bukiyou da keredo
        Itsu made mo kimi to tada
        Waratte itai kara
        Ah, haneru shinzou ga
        Karada yurashi sakebun da yo
        Ima koso ugokidase
        

        Ah, yowai jibun wo nando demo zutto
        Kuraitsukusu
        Kono machigai darake no sekai no naka
        Kimi ni wa waratte hoshii kara
        Mou daremo nakanai you
        Tsuyoku tsuyoku naritain da yo
        Boku ga boku de irareru you ni
        

        Tada kimi wo mamoru sono tame ni
        Hashiru hashiru hashirun da yo
        Boku no naka no boku wo koeru`,
        filemusic   : '/music/Monster.mp3'
    },
    {
        music   : 'Gunjou',
        artist  : 'Yoasobi',
        musicImage  : 'https://1.bp.blogspot.com/-Zb7NPvERuN4/YDz0k-FFohI/AAAAAAAAGj8/t5RsMX760NMK6MalHtEGCk8CEtpagiOSACLcBGAsYHQ/s400/YOASOBI-Gunjou-Lyrics.jpg',
        lyric   : `Aa, itsumo no you ni
        Sugiru hibi ni akubi ga deru
        Sanzameku yoru, koe, kyou mo
        Shibuya no machi ni asa ga furu
        Dokoka munashii you na
        Sonna kimochi
        Tsumaranai na
        Demo sore de ii
        Sonna mon sa
        Kore de ii
        
        
        Shirazu shirazu kakushiteta
        Hontou no koe wo hibikasete yo, hora
        Minai furi shiteitemo
        Tashika ni soko ni aru
        
        
        Kanjita mama ni egaku
        Jibun de eranda sono iro de
        Nemui kuuki matou asa ni
        Otozureta aoi sekai
        Suki na mono wo suki da to yuu
        Kowakute shikatanai kedo
        Hontou no jibun
        Deaeta ki ga shitan da
        
        
        Aa, te wo nobaseba nobasu hodo ni
        Tooku e yuku
        Omou you ni ikanai, kyou mo
        Mata awatadashiku mogaiteru
        Kuyashii kimochi mo
        Tada nasakenakute
        Namida ga deru
        Fumikomu hodo
        Kurushiku naru
        Itaku mo naru
        
        
        Kanjita mama ni susumu
        Jibun de eranda kono michi wo
        Omoi mabuta suru yoru ni
        Shigamitsuita aoi chikai
        Suki na koto wo tsuzukeru koto
        Sore wa ”tanoshii” dake janai
        Hontou ni dekiru?
        Fuan ni naru kedo
        
        
        Nanmai demo
        Hora nanmai demo
        Jishin ga nai kara egaite kitan da yo
        Nankai demo
        Hora nankai demo
        Tsumiagete kita koto ga buki ni naru
        Mawari wo mitatte
        Dare to kurabe tatte
        Boku ni shika dekinai koto wa nanda
        Ima demo jishin nanka nai
        Soredemo
        
        
        Kanjita koto nai kimochi
        Shirazu ni ita omoi
        Ano hi fumidashite
        Hajimete kanjita kono itami mo zenbu
        Suki na mono to mukiau koto de
        Fureta mada chiisana hikari
        Daijoubu, ikou, ato wa tanoshimu dake da
        
        
        Subete wo kakete egaku
        Jibun ni shika dasenai iro de
        Asa mo yoru mo hashiri tsuzuke
        Mitsukedashita aoi hikari
        Suki na mono to mukiau koto
        Ima datte kowai koto dakedo
        Mou ima wa ano hi no toumei na boku janai
        Ari no mama no
        Kakegae no nai boku da
        
        
        Shirazu shirazu kakushiteta
        Hontou no koe wo hibikasete yo, hora
        Minai furi shiteitemo
        Tashika ni soko ni ima mo soko ni aru yo
        Shirazu shirazu kakushiteta
        Hontou no koe wo hibikasete yo, saa
        Minai furi shiteitemo
        Tashika ni soko ni kimi no naka ni`,
        filemusic   : '/music/Gunjou.mp3'
    },
    {
        music   : 'Sukidakara',
        artist  : 'Yuika',
        musicImage  : 'https://1.bp.blogspot.com/-mBfTKBtCW64/YUrNZPYZGhI/AAAAAAAAHas/Gr8Mo1zPrfsGyXzUpNdlw67rxPOUuYejwCLcBGAsYHQ/s350/Yuika-Sukidakara-Lyrics.jpeg',
        lyric   : `Kakkoii kara suki nan janai.
        Suki dakara kakkoiin da yo.
        Dareka ni baka ni saretemo nantomo nai
        Datte watashi no “hiiroo”.
        Itsumo “nemui.” tte iu kuse ni,
        Jugyou wa okiteiru to koto ka.
        Minna no mae de wa kuuru na no ni,
        Inu no mae de wa deredere na to koto ka.
        Aa, hontou ni aishite yamanai anata no koto.
        Watashi dake no “hiiroo” ni natte yo.
        
        
        LINE datte shiteitai shi,
        Issho ni kaettari shitai yo.
        Houkago bukatsu ni iku anata ni
        “mata ne.” tte hitorigoto.
        Yasumi no hi datte aitai shi,
        Neochi denwa mo shite mitai kedo,
        Sonna yuuki wa chittomo nakute,
        Akireru naa.
        
        
        Furimuite hoshikute,
        Ishiki shite hoshikute,
        Kousui wo tsukete
        Hitori de musete.
        Anata ga hoshikute,
        Anata no mono ni naritakute,
        “ashita koso wa.” tte
        Beddo no ue de shimyureeshon
        Anata wo kangae nagara
        Mata ashita.
        
        
        Kawaii kara suki nan janai.
        Suki dakara kawaiin da yo.
        Dareka ni baka ni saretemo nantomo nai
        Datte boku no “hiroin”.
        “kyou koso okiru!” tte iu kuse ni,
        Kekkyoku jugyou de neru to koto ka.
        Minna no mae de wa otenba na no ni,
        Angai namidamoroi to koto ka.
        Aa, hontou ni aishite yamanai kimi no koto.
        Boku dake no “hiroin” ni naranai ka na.
        
        
        Benkyou to ka oshiete agetai shi,
        Issho ni eiga to ka mi ni ikitai yo.
        Houkago tomodachi to warau kimi ni
        “baibai.” tte hitorigoto.
        Kimi no sutoorii ni noritai shi,
        “ore no kanojo.” jiman mo shite mitai kedo,
        Kokuhaku nanka dekisou ni nakute,
        Akireru naa.
        
        
        Furimuite hoshikute,
        Ishiki shite hoshikute,
        Wakkusu wo tsukete
        Betobeto ni nacchatte.
        Kimi ga hoshikute,
        Kimi no mono ni naritakute,
        “ashita koso wa.” tte
        Futon no naka de shimyureeshon
        Kimi wo kangae nagara
        Mata ashita.
        
        
        Anata ni anata no soudan wo shitan da.
        Kimi ga otoko no soudan wo shite kitan da.
        “yametoke.” nante iwanaide yo.
        Hoka no otoko ni nante iku na yo.
        Zutto zutto miteite yo.
        
        
        Furimuite hoshikute,
        Ishiki shite hoshikute,
        Zutto tonari ni ite kuremasen ka.
        Anata ga suki na no.
        Kimi wo itooshiku omou yo.
        “ashita koso wa.” tte
        Kyou mo shimyureeshon
        Kimi to no koi wa
        Amai musuku no kaori ga shitan da.`,
        filemusic   : '/music/Sukidakara.mp3'
    },
    {
        music   : 'Out of Time',
        artist  : 'The Weeknd',
        musicImage  : 'https://actumusicfrance.fr/wp-content/uploads/2022/01/The-Weeknd-Out-of-Time.jpg',
        lyric   : `The last few months I've been working on me, baby
        There's so much trauma in my life
        I've been so cold to the ones who loved me, baby
        I look back now and I realize
        
        And I remember when I held you
        You begged me with your drowning eyes to stay
        And I regret I didn't tell you
        Now I can't keep you from loving him
        You made up your mind
        
        Say I love you, girl, but I'm out of time
        Say I'm there for you but I'm out of time
        Say that I'll care for you but I'm out of time
        Said I'm too late to make you mine, out of time
        
        If he mess up just a little
        Baby, you know my line
        If you don't trust him a little
        Then come right back, girl, come right back
        Gimme one chance, just a little
        Baby, I'll treat you right
        And I'll love you like I should've loved you all the time
        
        And I remember when I held you (Held you, baby)
        You begged me with your drowning eyes to stay (Never again, baby)
        And I regret I didn't tell you
        Now I can't keep you from loving him
        You made up your mind
        
        Say I love you, girl, but I'm out of time
        Say I'm there for you but I'm out of time
        Say that I'll care for you but I'm out of time
        Said I'm too late to make you mine, out of time
        
        Ooh singing (Out of time)
        Said I had you to myself
        But I'm (Out of time)
        Say that I'll care for you but I'm out of time
        But I'm too late to make you mine, out of time
        
        (Out of time)
        (Out of time)
        
        Don't you dare touch that dial
        Because like the song says, you are out of time
        You're almost there, but don't panic
        There's still more music to come
        Before you're completely engulfed in the blissful embrace of that little light you see in the distance
        Soon you'll be healed, forgiven and refreshed
        Free from all trauma, pain, guilt, and shame
        You may even forget your own name
        But before you dwell in that house forever
        Here's thirty minutes of easy listening to some slow tracks
        On 103.5 Dawn FM`,
        filemusic   : '/music/Out_of_Time.mp3'
    },
    {
        music   : 'Blinding Lights',
        artist  : 'The Weeknd',
        musicImage  : 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
        lyric   : `I've been tryna call
        I've been on my own for long enough
        Maybe you can show me how to love, maybe
        I'm going through withdrawals
        You don't even have to do too much
        You can turn me on with just a touch, baby
        
        I look around and Sin City's cold and empty
        No one's around to judge me
        I can't see clearly when you're gone
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        I said, ooh, I'm drowning in the night
        Oh, when I'm like this, you're the one I trust
        
        I'm running out of time
        'Cause I can see the sun light up the sky
        So I hit the road in overdrive, baby
        
        Oh, the city's cold and empty
        No one's around to judge me
        I can't see clearly when you're gone
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        I said, ooh, I'm drowning in the night
        Oh, when I'm like this
        You're the one I trust
        
        I'm just walking by to let you know
        I can never say it on the phone
        Will never let you go this time
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch
        Hey, hey, hey
        
        Hey, hey, hey
        
        I said, ooh, I'm blinded by the lights
        No, I can't sleep until I feel your touch`,
        filemusic   : '/music/Blinding_Lights.mp3'
    },
    {
        music   : 'Die for you',
        artist  : 'The Weeknd',
        musicImage  : 'https://image.joox.com/JOOXcover/0/42383594b70cc9b3/300',
        lyric   : `I'm findin' ways to articulate
        The feeling I'm goin' through
        I just can't say I don't love you
        'Cause I love you, yeah
        It's hard for me to communicate the thoughts that I hold
        But tonight I'm gon' let you know
        Let me tell the truth
        Baby let me tell the truth, yeah
        
        You know what I'm thinkin'
        See it in your eyes
        You hate that you want me
        Hate it when you cry
        You're scared to be lonely
        'Specially in the night
        I'm scared that I'll miss you
        Happens every time
        I don't want this feelin'
        I can't afford love
        I try to find reason to pull us apart
        It ain't workin' 'cause you're perfect
        And I know that you're worth it
        I can't walk away, oh!
        
        Even though we're going through it
        And it makes you feel alone
        Just know that I would die for you
        Baby I would die for you, yeah
        The distance and the time between us
        It'll never change my mind, 'cause baby
        I would die for you
        Baby I would die for you, yeah
        
        I'm finding ways to manipulate the feelin' you're goin' through
        But baby girl, I'm not blamin' you
        Just don't blame me too, yeah
        'Cause I can't take this pain forever
        And you won't find no one that's better
        'Cause I'm right for you, babe
        I think I'm right for you, babe
        
        You know what I'm thinkin'
        See it in your eyes
        You hate that you want me
        Hate it when you cry
        It ain't workin' 'cause you're perfect
        And I know that you're worth it
        I can't walk away, oh!
        
        Even though we're going through it
        And it makes you feel alone
        Just know that I would die for you
        Baby I would die for you, yeah
        The distance and the time between us
        It'll never change my mind, 'cause baby
        I would die for you
        Baby I would die for you, yeah
        
        I would die for you
        I would lie for you
        Keep it real with you
        I would kill for you, my baby
        I'm just sayin', yeah
        I would die for you
        I would lie for you
        Keep it real with you
        I would kill for you, my baby
        Na-na-na, na-na-na, na-na-na
        
        Even though we're going through it
        And it makes you feel alone
        Just know that I would die for you
        Baby I would die for you, yeah
        The distance and the time between us
        It'll never change my mind, 'cause baby
        I would die for you
        Baby I would die for you, yeah babe
        Die for you`,
        filemusic   : '/music/Die_For_You.mp3'
    },
    {
        music   : 'Save your tears',
        artist  : 'The Weeknd',
        musicImage  : 'https://images.genius.com/9d35a5dff10090e6c1d5e077932cea99.1000x1000x1.jpg',
        lyric   : `Ooh
        Na na, yeah
        
        I saw you dancing in a crowded room
        You look so happy when I'm not with you
        But then you saw me, caught you by surprise
        A single teardrop falling from your eye
        
        I don't know why I run away
        I'll make you cry when I run away
        
        You could've asked me why I broke your heart
        You could've told me that you fell apart
        But you walked past me like I wasn't there
        And just pretended like you didn't care
        
        I don't know why I run away
        I'll make you cry when I run away
        
        Take me back 'cause I wanna stay
        Save your tears for another
        Save your tears for another day
        Save your tears for another day
        
        So, I made you think that I would always stay
        I said some things that I should never say
        Yeah, I broke your heart like someone did to mine
        And now you won't love me for a second time
        
        I don't know why I run away, oh, girl
        Said I'll make you cry when I run away
        
        Girl, take me back 'cause I wanna stay
        Save your tears for another
        I realize that I'm much too late
        And you deserve someone better
        Save your tears for another day (Ooh, yeah)
        Save your tears for another day (Yeah)
        
        I don't know why I run away
        I'll make you cry when I run away
        
        Save your tears for another day, ooh, girl (Ah)
        I said save your tears for another day (Ah)
        
        Save your tears for another day (Ah)
        Save your tears for another day (Ah)`,
        filemusic   : '/music/Save_Your_Tears.mp3'
    },
    {
        music   : '34+35',
        artist  : 'Ariana Grande',
        musicImage  : 'https://dudeplace.co/wp-content/uploads/2021/02/arianagrande.jpeg',
        lyric   : `You might think I'm crazy
        The way I been craving
        If I put it quite plainly
        Just gimme them babies
        
        So what you doing tonight?
        Better say "Doing you right"
        Watching movies but we ain't seen a thing tonight
        
        I don't wanna keep you up (You up)
        But show me can you keep it up (It up)
        'Cause then I'll have to keep you up
        Shit maybe I'ma keep you up, boy
        
        I been drinking coffee (I been drinking coffee)
        And I been eating healthy (And I been eating healthy)
        You know I keep it squeaky, yeah (You know I keep it squeaky)
        Saving up my energy (Saving up my energy)
        
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35
        
        You drink it just like water (Water)
        You say it taste like candy
        So what you doing tonight? (Tonight)
        Better say "Doing you right" (Alright)
        Watching movies but we ain't seen a thing tonight
        
        I don't wanna keep you up (You up)
        But show me can you keep it up (It up)
        'Cause then I'll have to keep you up
        Shit maybe I'ma keep you up, boy
        
        I been drinking coffee (I been drinking coffee)
        And I been eating healthy (And I been eating healthy)
        You know I keep it squeaky, yeah
        Saving up my energy (Yeah, yeah, yeah)
        
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35
        
        Baby, you might need a seatbelt when I ride it
        I'ma leave it open like a door, come inside it
        Even though I'm wifey you can hit it like a side chick
        Don't need no side dick, no
        
        Got the neighbors yelling "Earthquake" (Earthquake)
        4.5 when I make the bed shake (Bed shake)
        Put it down heavy even though it's lightweight (It's lightweight, yeah, yeah)
        
        We started at midnight
        Go 'til the sunrise
        Done at the same time
        But who's counting the time when we got it for life (Got it for life)
        
        I know all your favorite spots (Favorite spots)
        We can take it from the top (From the top)
        You're such a dream come true, true
        Make a bitch wanna hit snooze, ooh
        
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35 (34+35)
        Can you stay up all night?
        Fuck me 'til the daylight
        34+35
        
        Means I wanna 69 witcha
        No shit
        Math class
        Never was good`,
        filemusic   : '/music/34+35.mp3'
    },
    {
        music   : 'Blueberry Faygo',
        artist  : 'Lil Mosey',
        musicImage  : 'https://s.isanook.com/jo/0/rp/r/w700/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzA3YjkyYTRhOGUwNzNiNjMvNjQwLmpwZw==.jpg',
        lyric   : `Damn, Callan
        Damn, Callan
        
        One bad bitch and she do what I say so (One, gang)
        Two big .40s and a big ass Draco (Two, boom, boom)
        Three more millions when you ask how my day go (Three)
        Poured up a 4, now that's blueberry Faygo
        One false move, and we straight to shooting shit
        Two small bands just to take you out real quick (Bands)
        Three more hoes pull up, I'm fucking shit (Three more, gang)
        That's how it go, big bands, I'm thumbin' shit (That's how it goes)
        
        Aye, one bad bitch and she do what I say so (Yeah, gang)
        Two big .40s and a big ass Draco (Two)
        Three more millions when you ask how my day go
        Poured up a 4 now that's blueberry Faygo
        One false move, and we straight to shooting shit
        Two small bands just to take you out real quick (Bands)
        Three more hoes pull up, I'm fucking shit (Three, yeah)
        That's how it go, big bands, I'm thumbin' shit (Gang)
        
        I'm with my niggas yeah, we some rockstars
        And I'm with my nigga yeah, KK Wockhardt (KK Wockhardt)
        This not my dick, lil' bitch, my Glock hard (Lil' bitch)
        Straight to the cash, I'm a trapstar (Cash)
        Straight to the bag, I'm that nigga, huh (Bag, oh)
        Got me some gas, rollin' up some
        Pfft, pfft, cash, yeah, I got me some
        I ain't fucked since yesterday (Yeah)
        I'ma fuck some
        
        One bad bitch and she do what I say so (One, gang)
        Two big .40s and a big ass Draco (Two, boom, boom)
        Three more millions when you ask how my day go (Three)
        Poured up a 4, now that's blueberry Faygo
        One false move and we straight to shooting shit
        Two small bands just to take you out real quick (Bands)
        Three more hoes pull up, I'm fucking shit (Three more, gang)
        That's how it go, big bands, I'm thumbin' shit (That's how it goes)
        
        3, 0 clip in my Nina
        On my toes Gucci Valentino
        She on go yo bitch for the team, uh
        'Cause you know yo bitch want a winner
        I just went back to my city
        And you know they all fucking with me
        But it ain't safe, poles with me
        I'ma chase bands till they end me
        
        One bad bitch and she do what I say so (One, gang)
        Two big .40s and a big ass Draco (Two, boom, boom)
        Three more millions when you ask how my day go (Three)
        Poured up a 4, now that's blueberry Faygo
        One false move and we straight to shooting shit
        Two small bands just to take you out real quick (Bands)
        Three more hoes pull up, I'm fucking shit (Three more, gang)
        That's how it go, big bands, I'm thumbin' shit (That's how it goes)
        
        Aye, one bad bitch, and she do what I say so (Yeah, gang)
        Two big .40s and a big ass Draco (Two)
        Three more millions when you ask how my day go
        Poured up a 4, now that's blueberry Faygo
        One false move and we straight to shooting shit
        Two small bands just to take you out real quick (Bands)
        Three more hoes pull up, I'm fucking shit (Three, yeah)
        That's how it go, big bands, I'm thumbin' shit (Gang)`,
        filemusic   : '/music/Blueberry_Faygo.mp3'
    },
    {
        music   : 'Death bed',
        artist  : 'Powfu',
        musicImage  : 'https://i1.sndcdn.com/artworks-yUQnVGiH3DyFh7IW-G3Dwjg-t500x500.jpg',
        lyric   : `Don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed
        
        Yeah…
        I don't wanna fall asleep, I don't wanna pass away
        I been thinking of our future cause I'll never see those days
        I don't know why this has happened, but I probably deserve it
        I tried to do my best, but you know that I'm not perfect
        I been praying for forgiveness, you been praying for my health
        When I leave this earth, hoping you'll find someone else
        Cause yeah, we still young there's so much we haven't done
        Getting married, start a family, watch your husband with his son
        I wish it could be me, but I won't make it off this bed
        I hope I go to heaven, so I see you once again
        My life was kinda short, but I got so many blessings
        Happy you were mine, it sucks that it's all ending
        
        Don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed
        And I, don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed

        I'm happy that you're here with me, I'm sorry if I tear up
        When me and you were younger you would always make me cheer up
        Taking goofy videos while walking through the park
        You would jump into my arms every time you heard a bark
        Cuddle in your sheets, sang me sound asleep
        And sneak out through your kitchen at exactly 1:03
        Sundays went to church, on Mondays watched a movie
        Soon you'll be alone, sorry that you have to lose me


        Don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed

        And I, don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed

        Don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed

        And I, don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed

        And I, don't stay awake for too long
        Don't go to bed
        I'll make a cup of coffee for your head
        It'll get you up and going out of bed`,
        filemusic   : '/music/death_bed.mp3'
    },
    {
        music   : 'double take',
        artist  : 'dhruv',
        musicImage  : 'https://i.scdn.co/image/ab67616d0000b273b9ec8665cdaff8d9aac6e51f',
        lyric   : `I could say I never dare
        To think about you in that way, but
        I would be lying
        And I pretend I'm happy for you
        When you find some dude to take home
        But I won't deny that
        
        In the midst of the crowds
        In the shapes in the clouds
        I don't see nobody but you
        In my rose-tinted dreams
        Wrinkled silk on my sheets
        I don't see nobody but you
        
        Boy, you got me hooked on to something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        And I could say I never unzipped
        Those blue Levi's inside my head
        But that's far from the truth
        Don't know what's come over me
        It seems like yesterday when I said
        We'll be friends forever
        
        Constellations of stars
        Murals on city walls
        I don't see nobody but you
        You're my vice, you're my muse
        You're a nineteenth-floor view
        I don't see nobody but you
        
        Boy, you got me hooked on to something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        Boy, you got me hooked on to something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Feel the love
        Do you feel the love?`,
        filemusic   : '/music/double_take.mp3'
    },
    {
        music   : 'I love you so',
        artist  : 'The Walters',
        musicImage  : 'https://images.genius.com/7d63532ef1ebf5434feeeeffffe634eb.640x640x1.jpg',
        lyric   : `I just need someone in my life to give it structure
        To handle all the selfish ways I'd spend my time without her
        You're everything I want, but I can't deal with all your lovers
        Saying I'm the one, but it's your actions that speak louder
        Giving me love when you are down and need another
        I've got to get away and let you go, I've got to get over
        
        But I love you so
        I love you so
        I love you so
        I love you so
        
        I'm gonna pack my things and leave you behind
        This feeling's old and I know that I've made up my mind
        I hope you feel what I felt when you shattered my soul
        'Cause you were cruel and I'm a fool
        So please let me go
        
        But I love you so (please let me go)
        I love you so (please let me go)
        I love you so (please let me go)
        I love you so`,
        filemusic   : '/music/I_Love_You_So.mp3'
    },
    {
        music   : 'idontwannabeyouanymore',
        artist  : 'Billie Eilish',
        musicImage  : 'https://i1.sndcdn.com/artworks-000465473298-xfxj3e-t500x500.jpg',
        lyric   : `Don't be that way
        Fall apart twice a day
        I just wish you could feel what you say
        Show, never tell
        But I know you too well
        Kind of mood that you wish you could sell
        
        If teardrops could be bottled
        There'd be swimming pools filled by models
        Told, "A tight dress is what makes you a whore"
        If "I love you" was a promise
        Would you break it, if you're honest?
        Tell the mirror what you know she's heard before
        I don't wanna be you
        Anymore
        
        Hands, hands getting cold
        Losing feeling is getting old
        Was I made from a broken mold?
        Hurt, I can't shake
        We've made every mistake
        Only you know the way that I break
        
        If teardrops could be bottled
        There'd be swimming pools filled by models
        Told, "A tight dress is what makes you a whore"
        If "I love you" was a promise
        Would you break it, if you're honest?
        Tell the mirror what you know she's heard before
        I don't wanna be you
        I don't wanna be you
        I don't wanna be you
        Anymore`,
        filemusic   : '/music/idontwannabeyouanymore.mp3'
    },
    {
        music   : 'Light Switch',
        artist  : 'Charlie Puth',
        musicImage  : 'https://i1.sndcdn.com/artworks-Qv2LrQksGLAKzm1a-OxvytA-t500x500.jpg',
        lyric   : `Yeah

        Why you callin' at 11:30
        When you only wanna do me dirty?
        But I hit right back
        'Cause you got that-that, yeah
        Why you always wanna act like lovers?
        But you never wanna be each others'
        I say, "Don't look back"
        But I go right back and
        
        All the sudden, I'm hypnotized
        You're the one that I can't deny
        Every time that I say I'm gonna walk away
        
        You turn me on like a light switch
        When you're movin' your body around and around
        Now, I don't wanna fight this (No)
        You know how to just make me want
        You turn me on like a light switch
        When you're movin' your body around and around
        You got me in a tight grip (Yeah)
        You know how to just make me want you, baby
        
        Do you love it when you keep me guessin' (Me guessin')
        When you're leaving then you leave me stressin'? (Me stressin')
        But I can't stay mad when you walk like that, no
        Why you always wanna act like lovers?
        But you never wanna be each others'
        I say, "Don't look back"
        But I go right back and
        
        All the sudden, I'm hypnotized (Hypnotized)
        You're the one that I can't deny (Can't deny)
        Every time that I say I'm gonna walk away (Yeah)
        
        You turn me on like a light switch
        When you're movin' your body around and around
        Now, I don't wanna fight this (No)
        You know how to just make me want
        You turn me on like a light switch (Switch)
        When you're movin' your body around and around
        You got me in a tight grip (Grip)
        You know how to just make me want you, baby
        
        Come on, come on, come on, come on, come on and show me how you do (You do)
        You want, you want, you want, you want, you wanna keep me wantin' you (Me wantin' you, girl)
        Come on, come on, come on, come on, come on and (Hey), show me how you do (How you do)
        You want, you want, you want, you want, you wanna keep me wantin' you
        
        You turn me on like a light switch
        When you're movin' your body around and around
        Now, I don't wanna fight this
        You know how to just make me want to
        
        You turn me on like a light switch
        When you're movin' your body around and around
        You got me in a tight grip
        You know how to just make me want you, baby
        
        Come on, come on, come on, come on, come on and show me how you do (How you do)
        You want, you want, you want, you want, you wanna keep me wantin' you (Wanna keep me wantin' you, baby)
        Come on, come on, come on, come on, come on and show me how you do (You do)
        You want, you want, you want, you want, you wanna keep me wantin' you`,
        filemusic   :'/music/Light_Switch.mp3'
    },
    {
        music   : 'Wait a minute',
        artist  : 'Willow',
        musicImage  : 'https://i1.sndcdn.com/artworks-aKx4jKcChJyMDgj0-jvsyBg-t500x500.jpg',
        lyric   : `Wait a minute!
        I think I left my conscience on your front door step
        Wait a minute!
        I think I left my consciousness in the 6th dimension
        
        But I'm here right now, right now
        Just sitting in a cloud, oh, wow
        I'm here right now, right now
        With you, oh wow, oh wow
        
        I don't even care
        I'll run my hands through your hair
        You wanna run your fingers through mine
        But my dreads too thick and that's alright
        
        Hold on, wait a minute!
        Feel my heart's intention
        Hold on, wait a minute!
        I left my consciousness in the 6th dimension
        Left my soul in his vision
        Let's go get it, oh, oh
        Let's go get it, oh, oh
        
        Some things don't work
        Some things are bound to be
        Some things—they hurt
        And they tear apart me
        You left your diary at my house
        And I read those pages.
        Do you really love me, baby?
        
        Some things don't work
        Some things are bound to be
        Some things—they hurt
        And they tear apart me
        But I broke my word
        And you were bound to see
        And I cried at the curb
        When you first said, "Oel ngati kameie."
        
        Hold on, wait a minute!
        Feel my heart's intention
        Hold on, wait a minute!
        I left my consciousness in the 6th dimension
        Left my soul in his vision
        Let's go get it, oh, oh
        Let's go get it, oh, oh
        
        Some people like to live
        Some just tryin' to get by
        Some people like that hurt
        Some just rather say goodbye, bye
        
        Hold on, wait a minute!
        Feel my heart's intention
        Hold on, wait a minute!
        I left my consciousness in the 6th dimension
        Left my soul in his vision
        Let's go get it, oh, oh
        Let's go get it, oh, oh`,
        filemusic   :'/music/Wait_A_Minute.mp3'
    },
    // {
    //     music   : ,
    //     artist  : ,
    //     musicImage  : ,
    //     lyric   : ,
    //     filemusic   :
    // },
];


function seedDB(){
    User.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Data removol complate');
        }
    });

    Music.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Data removol complate');
            data.forEach(function(seed){
                Music.create(seed, function(err, music){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('New data added');
                    }
                });
            });
        }
    })
}


module.exports = seedDB;