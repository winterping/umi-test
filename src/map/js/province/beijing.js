/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('北京', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":110101,"name":"东城区","center":[116.418757,39.917544],"centroid":[116.416718,39.912934],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":0,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@DNCVN@@HG@@LDFYAAXA^T@@RFRKABJMDDCO@@PGJU@EFALEF@WeBCE@GLBBaDABWFIOA@]H@@ODABueA@KPDNI@GXBLAFJCPTBhABB"]],"encodeOffsets":[[[119239,40830]]]}},{"type":"Feature","properties":{"adcode":110102,"name":"西城区","center":[116.366794,39.915309],"centroid":[116.36567,39.912028],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":1,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@@KISBKJBRALBFEJ@BI~FfBAvCB@PG@@^PBEJAXCBAbKA@HFPHB@HY@AIS@Bg_IGN@MUCQDICLEBaBoDCW@"]],"encodeOffsets":[[[119118,40855]]]}},{"type":"Feature","properties":{"adcode":110105,"name":"朝阳区","center":[116.486409,39.921489],"centroid":[116.513687,39.951064],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":2,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@cVBJO@MN[LGHNLCJGFGGQPQJWAOHMLY@GFSDCHGBAOICBGGA@IHGEMOB@CQDSBcKKAGKFKGISCCJC@AIJGaCwGtJ]@IZ@@GGAEODFfA@XFEBKFEV@HI@OP@CDNCAILBEQ@QS@B]BWZBCE@KH@@GM@DUCMAMHIBFNGDBNIJ@OOSH@EIABGIAAGGDIQMAJAN@@ERACKRDTMLALIVFBHTDFENDEBPF@LLDR@BERCHHKHTCBJ`AVANEBETBGGPA@FPA@LF@@RLLE@AHT@\\VOPJR@HJ@CRW@@JJHFJEHDLCTTCKRJB@PHDEJDJZICNAbC\\KAAHLBBFH@ANKLIEMHFHQJeDKF"],["@@JDK@PITBUEE_CC^IJBWHgFQ@LJBHeCKFDBQPCALF@GJLB"]],"encodeOffsets":[[[119394,40978]],[[119403,41015]]]}},{"type":"Feature","properties":{"adcode":110106,"name":"丰台区","center":[116.286968,39.863642],"centroid":[116.250342,39.835716],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":3,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@MAeGBEM@@II@GE@IQDDGG@GLIFSCUBWNGCODIIEBaGKEKAOGMAAGO@QEQJOCGEFIBM]ECINGPCPEDKLEBHHEAEBUE@CGFQCONOAGFCNHL@AF\\BBIJBLEBGI@ECEDGKHWNBLJ\\ABFNCNDN`\\A@GJDNA@CLABV@VNNAJRLCD@LZ@BFXAFCDKNKDKEKBOPHFIXJ\\DDGN@ICHEL_LIHDNXH@B^H@DFXBBJ^ABKT@DKE@DSVBBKLALDB_NBA^CLrBBNP@@RGDEJI@CFKCBLRCAPGDBJJEJJNBJRHCBHJBAHJB@FTGPPI@MJCAMHAEGJBNAAgBSADOEIKBWA@HMJOC@L}EAJI@EFKAQBIAALJT@LW@UIOI@T{AMB"]],"encodeOffsets":[[[119050,40855]]]}},{"type":"Feature","properties":{"adcode":110107,"name":"石景山区","center":[116.195445,39.914601],"centroid":[116.176229,39.933205],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":4,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@XMVATDJEHKH@CHRC@JHFJ@@JN@AFfHNBK@@fEHYAICCFqEBTPBCDFDEDFFAPEJWZSH@FIDAPDLOJAMMICDERQGCJGJMIuEIGFSLICKIGHMICEKPSJDFI@GFCRCPYLEBKNGNO"]],"encodeOffsets":[[[118956,40847]]]}},{"type":"Feature","properties":{"adcode":110108,"name":"海淀区","center":[116.310316,39.956074],"centroid":[116.23328,40.026927],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":5,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@X@CDApAbKFJDRCVD@NHM`JAhT@BJ@JI^sxHbDIHBJKBQ@@FMDCLJB@HNBHFAHQ@AFS@@EK@UCBGI@BIE@CHOHBKKCONQAEDECYnUGMZ@FOAMNLFANIBBIEEGFMCIFFJCLF@DdY@eNEEKFANCHANQACGQD@GEMKEMCBMFMG@DGaEg@AMID[AODGCKLMCIBMKGBAMEGMCAGKEGIEKDAFKTKBILKESNYHMLCVBFDPCRBRELBVCRMRALGBEVOEKUAMCEGHIDIRHFQDCNJBNPICKBOJC@ETGXYFIBOEEFCECDCOAASrFDEJDZBFG@eL@NA|B@SPJVJX@"]],"encodeOffsets":[[[119118,40855]]]}},{"type":"Feature","properties":{"adcode":110109,"name":"门头沟区","center":[116.105381,39.937183],"centroid":[115.791698,39.994115],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":6,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@FHNDVBFLUPAFKHQBQNUDKAQFQAODECUAKDGNMZFTKLAJSLELCBKCKBGIEFSO[LCAOFUBMCEEQECRKPDD@PIAAIGJSDJH]dWT]HCCGFg@MJG@KJOAGBMCWFBIMJKFa@GHYXED@P[CIUKEOBIUJOIMQKMEQAQJOBQCJEN@BESDKCGLKCKDEAiEEFSIEKDEOCIDKAGDICSFO@GEAOCBC[KAKBCJQIIDQMBQEEOGMDUCWQKABESUWK@ESMUIO@KCEQSSBGLIDQMBMEQOAIGQHIGSFIT@DDNADELAHGPGPARELWPMRCbYFG[]BENARIF@AKKA@SKUIEFMZEHKHBXIDE^KLGR@TBHJJFFPLJFNJFH\\JJDHPJR@JHH@LNZDHDN@HNNFFHdJT@DDTBdPBDXHPHJIf@JDTEHKP@PERUFBNG`HPJJNJFXD\\GrBPFJ@JMAQQG][LOnIJINBNH@GRBAD\\LPAIOKEBIGUPQbRR@BOFATFDFRAHDRADJ^FANEJHFPDRIRFP@BHNBPHLBLFbHFAJJPCHDMPMHALKFOZQDED@HEJICOTFLJDGNJHDLKJETJHvFNJ"]],"encodeOffsets":[[[118940,40954]]]}},{"type":"Feature","properties":{"adcode":110111,"name":"房山区","center":[116.139157,39.735535],"centroid":[115.853966,39.719216],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":7,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@QBGCQBCESEEBAPQ@aQORHVAJLFJPOB[KBCQA@HMGMAIJmJKP^\\RHBRINI@OEqA[HWCIEIMOI_GMHEAQVOFO@GLSFICe@IJOGWGACcOSACCS@cIEGMEGMM@GCYCKMG@IGQ@OICGIIG[IEEMKIEOIEGISAQ@EEBKI@MQ_AECmGKIUPIJSDMMeSI@QHSEEMKEDEHDHCAKJWfORGHDX@TGEKFeDMEKD@NK@IEIC@KIBEEIJIQKIQ@GbADHTAJOJELACMDUBCQMCQH[FDAHLDNHFL@FLJNDLIDGVGDKNGCI^CLNNDBFJAPBLFNINADLNAFGLDPAPJDJ@LLMXIHI@KJK@MHABQGAEGNEX@NEFIBWL@@JXE@KFEDSRWNALBHKDDGJTEBBNGP@|ANCBLOBCHJBAFGFALH@DHHB@L\\@HDBNH@JJLMHDBGL@BFTA@FHADJHB@LELLDXEJLABHRMDBHEDHVDCVCBELA@EHCBMF@@GJ@@ELADOH@FILJHADLJ@HDAfBHZA@OLEAMXBFLH@@JNCJBAWPA@CNAºFFBAHJE@KP@FFJB@GRA@CPBBDVDDV\\@XD@JNBNC@CLD@EJ@JEDKZBHLBPGDBFIVBV@TG^DRLZCFJLIJT\\FXCDJNPLBLFHAJGRPPBRDJCRBPCF@VAPFLCLMLCLEDWBAEY@@KDCQKBIMM@UAUKB@DMBIC@H[BM_MCMDAE[BKIMAGXHLFCFDJ@AHKFIAAJ[ABEK@MGEDBHMPDPERDHF@AVBFGFAGKFCLOFODMH"]],"encodeOffsets":[[[118840,40803]]]}},{"type":"Feature","properties":{"adcode":110112,"name":"通州区","center":[116.658603,39.902486],"centroid":[116.733003,39.803506],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":8,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@JCBENGLBJF\\KXQBKFKN@BFJ@ANFAERZBPFTHHCBEVFAJHBWVDDCFPHADN@AHXJA^V@FFTBTHPA`FCJHBKPYECFJDBFOVBPIHJNZBDFTFJA@JG@CJHBAHMVIA@PNHDIVNINJJZBJ@NGHBCNL@ELYDEPP@YTCFBNE^QXMHOE@MJMGGKDYXMB@EM@KD@FOBIVK@ONEAQZGDMAGFARGA@GG@@MSFOLCH@VERBdBPAXCDcLKLDRNLBLPVBVKPDFMDW@CHID@FSFIE@EMDAEIDCEAHOFIMMGU@DMCACLKBSAGJIFGEGFAH]KEHKCEDIA@HKB@HGAMCCSKCLEfCRIEGNGJFLKBMG@AEKABGLBD[BaDMYJCIFIGC@OIALQSDDSCKFGEIIG@IX@DQI@@GIQPO[US@BGF@KK@QE@@KOB@EOBHHSAAFMFUB_BAISDLGGGJEKCNOBQMEFGMIDIJIOENQPDBEQAFCBIY@GRGGJGCYPCEGREBEIDASLCAMCEIDEGLACCJCTHzA@ILBDDRB@CPBLDBHHBPLJB@DN@FILBBMNOPA@II@CEBKJ@AMNC@FRCFEEGDKNDLAJDN@BCTABMESBOHMHEL@NACSHI"]],"encodeOffsets":[[[119527,40576]]]}},{"type":"Feature","properties":{"adcode":110113,"name":"顺义区","center":[116.653525,40.128936],"centroid":[116.726467,40.152366],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":9,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@LZ@LHDR@ACVGFFXAJCBTDB@NRD@FdBBFPETUL@NJT@XBJHPBHOLFHPHENAAGNB@MdT@ZP@FDLADLD@FPIFBPCJIBMLJFFNIFCJDLKFFDDVPXKJGNMRBFUAKN@JH@GNKAQ`CHRAF\\KLGBKIEKMDCCIDCNK@MJPFOFCLKL@HIHAJKHDLIP@RW@EDCVKPUASKDIEAEO@IYECFSHKCMD@OGCAMQGCEEHMASNSFG@DHCB@ByyKB@KOE@IKEMMKBCHKGCHJPGNERcCKECDGACFWA@OCCQBQ@BJGFALQAEJEEEDYBBHK@BJ[GKDKAGDHSIKS@CG]BEFECCOO@WKAOFYK@GGC_ZQFI@MDGIGCKCBGQBGNBPGCOSCBKFAD_LYESQIO@MCBIHADGTCHEZ@NKPGXBRIROHHHExbGhAXJID]`DFFAVJS@OLICLmHB@GLA@GJBFCLDFG^LBGHEHFJEHITBLADKDBCNV@NHJNPEBGDFJCBFNC@FJFTE@EJCDGX@NC"],["@@waDIMKHG\\KNMP@AIdULDDTNDKnKAHIE@BKODARECDLGfIA@KER"]],"encodeOffsets":[[[119575,40975]],[[119377,41039]]]}},{"type":"Feature","properties":{"adcode":110114,"name":"昌平区","center":[116.235906,40.218085],"centroid":[116.210616,40.215484],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":10,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@D@DITDHJELHLLBdLTARC@DPAFNGH@JHBAHJDBPAJNDP@RJFTKZC`EBALTDDPOHMAAHHRDADLJHCH@NEJYRD`HHL@EZBPXLP@DPFDIDOASL@PIHM@EFQJIEKDBNENGDHHPTMJIDKVGGK@GDMCQH@BY@IHMBQCBEUEFFBPINDBFLKFOCMAHRHAFFIJSDOL[PE@ODUCMECPG@BQOOWNSCEFICAIICGJCCI@IEINIBUACIaGYIEFMACEQ@WIBIEKJCJGEOOAFHEPMEFCGE@GN@KK@KHOSISBKR@DKNOBGCYBEJKHG@ICMAQSHIKKQBCGSAIRBHSTSAOOKFUIEEMCFOACZIFIOAGQDGCGFIKKQKDAGIIES@OEMDgQ@GIOIAQFBCMMAEOQDGCEFEQKAMEAEMO@MFOILGMUEAFINSAIHAPBLIH@NIh@HEDD^GXS^cIGTCHIBJJB@OCCLODQRFFFNDVAPEDB\\KTPFEHJLALDFLHJLFBHNDFHBNHANLJANDLKHDPC\\BJCBNh@bFCHH@ENANNDLFFN@HRCDHRBBMDGBMLEFFfMZ@CcE@DKEIJENDHEFFAJJABMKENMPB@ENYVHZmFDFCRBPMLDALPGDGF@AJJ@AHVDL@@FT@BER@BGGEMA@GIADKNC@ER@LA"]],"encodeOffsets":[[[119185,41003]]]}},{"type":"Feature","properties":{"adcode":110115,"name":"大兴区","center":[116.338033,39.728908],"centroid":[116.418968,39.647838],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":11,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@GJDTMBK@GFGNAPFTANSBADM@ICKBMCCLFHEFQD@EMDBNI@ALDFJ@@JOBMPANKAEJM@@CIAOKGAAGKCOA@DQACCKA@JyBSGIDDDKBFHJCDFBNKDBTJCAFQFFHODDZIHHHHQZ@AJEDRBAFOCMRPFIJCJNJEHNFARMPLDIFQDAFQ@KC@KOEFAMCEFSCAGUEKJKBSNQCDLQB@FM@IBIIIFAIHCBOQDAKLDDEJ@FIHC@QO@AMqADKB]MAA`KCKBALUACTF@CLS@AL]BAIWACEG@A]G@MWGCKJK`GFJDM@CH[CWIEJOG@UDEAODQCIAQOOHQBIEGAKOKIMDCEWS[JIIKDEKYCQH]@SAUJUAEHCAOGKJUFCPFCIL@DKHAGGH[ASF@CIEAFGAIPIHIBIVIN@FGHDnIDGLGDIJE@IJCBERM`GBFVALEL@^AHDPERBbGRGFF\\F@HHBAHIP@VIF@FOBCIKCEJJ@ENGEUEAFHFFRJ@ITSDAHID@ZFBLET@FCAMBMPBBEVFALE@@NCHF@Z@@DVA@HJFRB@PEDGRDAb@@EfB@RD@BLPBBJNBAJK@@HFJCHHH@DLF@CVGAPHF@OJ@PJJBJDANHBGH@H\\@@HZCBENBDJL@@IHABIH@@MH@@IPENB@JVEBEVDADLDP@@CfIJFFKD@DGJElJCJMF@D_PCTJBHGNHL@FF"]],"encodeOffsets":[[[119527,40576]]]}},{"type":"Feature","properties":{"adcode":110116,"name":"怀柔区","center":[116.637122,40.324272],"centroid":[116.586079,40.63069],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":12,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@H@DONFVDPCF@\\OPKTCJIEEGBGQNBPDLEEKCAJMAOEEVFAFRDNAJGZ@@ARGNDHCL@HHLUJCNIOSGGHCFMAMLCJFRIFEN@JG@OTKPBJCFE^ADHT@JLGTHCLBLC\\HAIL@AGZAFCFFFIRBBKHEAIR@RADD@PXBDEHBDCLFdDFQHMIODGLHDGLANNLF@JPF@LLAzz@A`hFALPTLGDKRG@ANMDMCALYG@HO@BJFDDTE@BJQBDNK@OJBHRNIFDR@LJ@JHBHJ@XJOH@DOCELBVMNJAJDML@NHFGDCEUDORECCT@LVEUN@JJF@VDLVLBLJFIJKFIN@LUHQ@IJWCFJ\\@EJNF\\ATDBFHD@TKTFDEFFJKFDHAHGDILHFFCBNGD@JVPANBLERJHAFDVTJ@HVFNHJBBHNDBFNBLG^CFH@LFDBbGNGXCHFLTQTENHRBPAJDRRKT`JBHLBBFTDIPRDDHJARHMFDTKJ@DKBQHAJKJMD@DQ@CDKBGAGBELM@OMGB@RIH@JifI@EJMEGDBPQDUJSBGFCLMHG@HVJLODCLIAID@JMHMLCXQR@JFJHDEFB^PN@LFBJNEJAPGHBFEHKEKBGHO@QJEJMFKAEDOBKMOABIGO@IHAHKBOAICCIUDIC_aOQD]RKLODCIWAKFKCCEQIIBGMWBODE@OJMGI@SLQGGYDGKUNGBGNUACLCBKJKJcGKS@KJO@CAWAKJYCICQLK@ELEDORALIJBFSPKAKMQ@SMCGGIBSAKPIDITMNEJIBGPINORCDMNINWBIPGPM^CFK@KVMDGJ@HSAKLOACLCRBJMNCHGJDDIASJEPCIKDSGKE@AGFKIG@GBIKAOIKYHIL@REJDNAHMFACGRCFGVDHEBGJCBIF@TKTA@IIKOFSEKDKCAKEGEQFOIEBIMQMEIMG@GSKCEKWCIWSKEKKKJIH@LIZDFDL@FMLELMNI@IOIEGaCGBGF_@EDODCOYBSGWDIFEAM@YSOHBLUHDLAJOHGAQDOCMBKCKDO@SQE@KKMBKCFSNMLCKOOKBEIQBIHMDQIGCDAIFIGGDCGMHG"]],"encodeOffsets":[[[119081,41362]]]}},{"type":"Feature","properties":{"adcode":110117,"name":"平谷区","center":[117.112335,40.144783],"centroid":[117.145392,40.208997],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":13,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@FGHBFW\\DLCRG@EVBN@FDHEAHJ@CJLHLNZDDDALRBFFNBAHVB@GJH@LfBHGXBRMVCbLHLAD\\GFCR@DJIHHFHAFSNEACPDFNI@BFTNEH@LZC@HJD@HNHDHPBHHLGJBNCFIHAFFAJTPXE@FLHHXNFJCJFNI@EfFDHJBBHM@JHEDRLGPKNFDL@HFJEFFL@HGAJZCADRNHAFJSJSIG@@NE@CN\\DOHMFAPbFGNEA[L[@GEGAGLE@CPEHDTINBFGhEHOIM@@EYGO@GRDHALOLWLBLELALHLOHMBBDGFET@LGBELILKBUCCNKDMGM@ID[DKCSAEESFCEOCKM[GEEOCaNMEQOYI@CK@KKO@IHQAMEMBICQSCKEC@GHOQODKKEO@@EM@YKAIOECGSQHGNIPDNICI]WE@EFM@ACQCCCLKE[QBDGR_LBHMG@@ILMVBAENQHMLIOWCUECLECKDIJEEMIENKJADIAOJEEOC@CKKBECO@@Y"]],"encodeOffsets":[[[119770,41013]]]}},{"type":"Feature","properties":{"adcode":110118,"name":"密云区","center":[116.843352,40.377362],"centroid":[116.995042,40.526881],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":14,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@FFDRNDBJH@@HGFBNGTTJFJVPLNUH@JQJMBGNHLKBILDJS\\K@GH@FLLCBFJJBTETLNIRFPCBHEDKRERIHFDALTJRNJBLANJ\\DZV\\BFELBPJPBFGZEHILEFIVCLNLDFJTIPARN@HMDETBDMPCHPZTRPAHFN@J^CHJDOF\\BDGHBJKD@FQPCHFV@DPFDENXF@JURSLQDEDUIKAWHWAIPGEMHMDIAIBYES@QIOBUKcAKMBCKEUE}DWH@FKFILMJIC]EOHAF]NADM@CFKBICGDWBAEI@MJIBIEWDKCSDGDUAMR_EQGIBIEeDECUBQG@CIEEFSBICOBEFWHEDOAEFOBGFBLKL[LGFCT]JELJPIR@NeFK@GJ@RDLODCFQGIBCGQCJOSCAEKAAG_ILSQQICOBQAMGSFSREKDGHWHMAaEC@KEG]DKHMAAEMCAGIAMGUE@GSICUBEIGFQAKBMUO@IHCAMEDGEJKHCBGCGLEEIFEECLS@SGCAESC[BMEFI[@EIXDJIR@VG@KJMLEJIIEAKUKCK@UIE@IVMUF@KDSFDPQVCDFHCGE@MNKICIBNMAUFKPD@CPGWII@AGIGI@@KCQJEQMAGPIL@CMRAAIF@CSECAIP@@GZHBKNDNCBMH@LQHCSKKOEB_gDACGH@TETMNBFGDFRHBNHD@PNCLDTGDEZF@JFPFBCJTLVBLODUFCX@@QJOCKLGBIJG@GLKDKPEOENIL@DMJCDDNCFLLJHADDRDBDN@FEF@^XDJMJOCMJGHTRDHPFBJZLN@@FP@LFCLRPGP@HFDDLRTJDNANFRBJGP@LLL@@DZJRPNFbMPDFF\\HLNPDDFTEFFTBLD\\CJCN@NHLC"]],"encodeOffsets":[[[120038,41345]]]}},{"type":"Feature","properties":{"adcode":110119,"name":"延庆区","center":[115.985006,40.465325],"centroid":[116.164004,40.540013],"childrenNum":0,"level":"district","parent":{"adcode":110000},"subFeatureIndex":15,"acroutes":[100000,110000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@RLLLEJDHCHHRPBEJYJBDEPNDFFVJLEPPTBTSAGJQTBDHRALLGJRTNBJDH@LGFIZAHDPALM@CLQTATJGP@LLLM@@HHFEDNFFOEGPBFPIHIDFLAJXJR@DFNBFEZJbHDJVBJAJMJFJ@DDHIJDBJJDFETDXMPPARGHHNCDHHEJBJDCJHCRGNAJJRAFPLLPKDMNETLDNALLF@TRP@LCLDNAPDRCHBPGBICKVGAKPGZTN@FBJEXCTHZADPPCFC`@HEHAbDFHPJ@JMJKNKFENK@ECYCKJG@IJLLFLTLJXXDFLLDHTH@JNNFNRAJJFEPFRFHBLLDLCTFPEJL@JSBSLE@AJIDAHGFUCEHQDDHEBGNMBICQFK@GJLZPJLBAJ@HJHELBHF@HLCTJLODIFBTCJICGHMDINQAKDWMQFMCKBMAQDCRMFICS@[MQ@EAMDOESFS@EBYCICIKFQEEEFMBOPQ@GEGD@FGJ@LQLEJUHCEUKBOGECSHCUMEG@IMIEDKCBMOKKCMWGAEICMIIDMCMEEAMISUBQFKBW[YIAEBIPODEGC]AIFUGEEQGEOGCM@IEMAMGWCEEATG@gmQAAG[AMXEXKABJWHMAGDSFMAOHYBSSEAMSECcBAEWEQFeKMgBICGICSDKAMFOEQKCGG@KOICGDCGDKMIIOAGMSNSBHr@NINCKQBKIGCOFENDMMFKEBBIGGbMFIP@AIBGF@NKRDLG@QCEJ@@EPBHDDEJBDELBDCbDRGDOHIEEDKHEIGJKDBNGBGNCGMLO@OHBDOHIJCBKLG"]],"encodeOffsets":[[[118751,41232]]]}}],"UTF8Encoding":true});
}));