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
    echarts.registerMap('河南', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":410100,"name":"郑州市","center":[113.665412,34.757975],"centroid":[113.477391,34.626256],"childrenNum":12,"level":"city","parent":{"adcode":410000},"subFeatureIndex":0,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@YNO\\yOWBpeCkS{@m^UA}UciY¡F_OsF[TS^UTaJqCOGM]HIP_Ve@Jcbm^QFyCgMeCwFiHChgLSYSggSKeEsV{BaOGKE]Qa}QeKSPyyCWS¡MiJ]ZiRW@GOYOaI@o`YJcBIEKcME[e]BUN[OG_BULMjJRE|@ZFXCTSA[MGP_~[OY_@]cOB]TWHeQeKAUL_IUbaIWc@@E`CJ[K[NO`DDS\\YDOXYhCfDp@^KdEOO{BcKI_DUMcFIeQQPCMHcADOPo\\OKuGHmEIWMKLYCUSGCQPECaJSpLHUbATCDWpRXMT@lcYGA]`JbGVFzOpDdNNGCjHPSNATQl@bGNU`GVBTRMp`RR@JZb\\@ZZBTXJCPLBPBAlNTIPT\\p@JQbKGUpEXBZEOgPK^B~_XGXZ`IZHNMAMZUvMVNZDlMP@`ST[TA^[V@VPpKEZZB@V\\JTXhGjBbZCHZLz[`ADJ~DJCFjOPJ^Mr@b\\tXdRCFO^APVVC@chHnE`F\\ND\\GPSFBT\\RX`x[RQZAVX@RLNnXXVLCRLNH^WDDRfCAUTDEZLPO~VREj@fa^E`jr\\RUZwlW`VP|FnE^NXzRBZ"]],"encodeOffsets":[[[116963,35758]]]}},{"type":"Feature","properties":{"adcode":410200,"name":"开封市","center":[114.341447,34.797049],"centroid":[114.541763,34.604497],"childrenNum":9,"level":"city","parent":{"adcode":410000},"subFeatureIndex":1,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@TGHOEYRQXNdHFMxK@SPBJO`ECWTDFUPU~GTTPETLPUJTdORYKINIBYZCNMvHJXHHdPNA\\VNLPdZD\\QxA`_XG|GjHXddDLH^pYLYDKNTJDbQFZFAQ\\OR@BVbANIPYbCRFLMHonD@YLGLXETSnBZWj@XKp@XET[LEnRLJN``BPLrCfRB\\ZAnS|IJfgbWHOrMJLdHRZYNALmHGTNBEfZJOFD^NXNSPELVT@PLRbLBH\\YEP`GNN\\SFNNENOABvEZObHVEdH\\QPFRTJjDTHBTIJqVa@oSSHCf_Jff@NoLMR@RNFDBNTAbW|]\\C~^\\@PFZG|XPDÆC`bjJ^WRBXPHThIHTMLNWR\\CVhU\\YJGrBTRVFXYJFCVRdVFE^UCMOuXeG@RSZ_HD`IJmG@o][GYSQJOXµB_QWYSTKXcHSTHf]FUmPCDQD_OySC]_@WviVWG][UwESE]N[Da^eSuL¡P{MaMwGÏhsbaRcE_ccWSA±DGaRKLAYQWy]MmF{EUOX_xkVY[QiqF_b]@eFiUQP}KOFYSCBVeDCQXCG]KMDQUKWWMmK@QUWYBQRw\\W_[QASTEHOC[[M_EmFgG@dUDOU]BEPQDWc[s@aNqI]POEi"]],"encodeOffsets":[[[116619,35152]]]}},{"type":"Feature","properties":{"adcode":410300,"name":"洛阳市","center":[112.434468,34.663041],"centroid":[112.038509,34.293198],"childrenNum":14,"level":"city","parent":{"adcode":410000},"subFeatureIndex":2,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@T]dC`IVUPA\\JXELREiS^WV@j^PDdQvBpMzDtSjqheXTA¤k[Pe@yJMVEjFjE^Oda\\AÄ\\tFRLINIKMRFVTR\\@jcNFlIJHOnOHI^DJR`NVRV^PlRNTDTMBWLI|``FTCTHCT`^HvOLBLdTGTXP`DndxLZLRC\\@VJntLTZRVJxAjlPXITkJYLI\\XPTBjNXBfnJiZ_DJRbJfpTDbJtP`J\\Q^aLKnKJodlCPcTGX`RF\\rhbJMJbTvHTOCYXHfDZR~IVF`Eh^aBGVoKITDbOFDRTHDVKZNLJXFGnvHPLp[POCdBNGDROfREJNdCVJ`dL|APPcF]Lo@eCgDWZCP[ZCT_CMPL\\I\\_D@Fd@JXabJVK`BVfLfRXG^SPA^d`@PZ}\\O`NHB\\STWDYE{@QFiIKNAVH`\\P]\\sJ]CgM@sXiZgNeKCzL\\GB@ngBLKNAVMJETIQYUoMQP[FQk^AJRX@T[Ek[A_LQEMNwZ{LEKLsNsV[AgJg^]MQWUAi`]RqPe|cZuLcP]B§COLHXERWNEN]EJ]M@]eW@KxarQ[OFO[@SGHSlKASYa@Y[_I_QKQAc`OpCxiAWRApNTGOOFQzgNMOMFM\\IDSAI[ODOOW[@FKIOfKBMcMGoUBDQWeN[QEGO[GUSAQYiohaAszDMECWU@[Oee]BKWeF_KQSG]@RqXWSCYN©`UL[FSQSRYKc[KC[JmEYWIOw[KK_oQSQ]@WN]MgAcDM^UEe_BmwLcLMCMi@M_WMACecG]@QMM]EaFGfCNKFU`cN]So@mLKMi]AOKd[WNajE\\_JS^KRBJS`NPIB]NQlAVM\\@Ra[OWy@eZmAeDWWWgSemEYYC[RcIgFSQEUPW@MmUMPCQ`UEO`OR]jg@u"],["@@BHWFFOPB"]],"encodeOffsets":[[[113932,34608]],[[114718,35614]]]}},{"type":"Feature","properties":{"adcode":410400,"name":"平顶山市","center":[113.307718,33.735241],"centroid":[113.016514,33.795715],"childrenNum":10,"level":"city","parent":{"adcode":410000},"subFeatureIndex":3,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@IHNXURGboCINuM[B]IMEfYNQE­pjZMHI\\JfCRahMdJT`lJbr^DRBW`K|SPc@[HQGAUUC[zVPhcHG\\]CM^IDYKBUKKO@ITWLMiDOJGT_NGTFXWV]jAVHTCPSLeHQRFpP^JHMVaHk@SRMBOTiGDMHcMoCyPUEaH_IB^ZHkdS@WNoQCXSDg]_FUE}JYQeCWGDZSPuGaSNIaIqgE[_QHWdSDOckpLILmbKR]I[O_IsCaoSIeaIQ`CjYmIAeMWAiOSWJ[ZKlIJSOWikwBUIYQKSmsUI[@QDYKwKmc_CWOHScSAKPKGu_]DSTQfDzYL]jajDPQ^Jb@`RZBPI`EbDTaleCQNMfJRIf\\Z^XBVKBSLIbCXP^DHMhMJGbChBfONOTBZUVNzZPKtFPNDh^PfGJPrStDNa\\OTB\\QHONDtQJ]RB@OVOG]JQBaHKWWGSHcHM|RE`KFY\\A\\PjDbKJSfk^U@[VAFO\\@ZMLQZDZETOpVzSMNYMOFY_EGM`FuWQMg@SMYMA`[G[FSIURMRl`Nf@bHXGA`NLOXCRSREVlZIhBNLbaTHRT\\lGJcA[tMvLrL|RjZZDrEL`bnNV|IXoJOKMFqUoDOO]FwAOZY@SYUPmN]BE^NNAhXjIjHGj@PJ\\@NOLBGbHBPXJLdQ@C`rLFJt`bNNTQRm\\SFMxH`ORRJ"]],"encodeOffsets":[[[116312,34521]]]}},{"type":"Feature","properties":{"adcode":410500,"name":"安阳市","center":[114.352482,36.103442],"centroid":[114.358257,35.878529],"childrenNum":9,"level":"city","parent":{"adcode":410000},"subFeatureIndex":4,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@RIBgc[MSFOPIPSSEYf]KegD@SREHUQUWBXoYKGKJaXI_SDMLJ`F`KB[VENR`DnSN\\TPnP^NPhZ\\TVNhL`AjKb@RHTXFlGRjLfBdENHnCtHBN nAfH®U`ff`GheNCJLVHroEQFDVZTVFJ\\AhKSTJo\\C`QPBL^d`FJVRHApOZJLO`ebA^LV^DZ\\nhJjELWDAdFRbHNJVfBRN^KfPvR^KfFRKXKI@\\RNBN]NuLmTKHXG\\QJMXLjg@AHoFSEAaaHSAMMkPYAWFAI[EATWH@PaR]_QJgBAODcIMUUAQJKMm@HhUDORSA]VW@BTwB@J_BKLGK[h[Jk@[FQfaEqHWJCZMFCT_BAO_FEIUAsRcT_YIBWf[DOwcFGIY@PhWNCIbSQqDIFMOsNCR_XLZ\\PKXUGaBEHNTCVKHSCMUm`OBD]^@@MPKUIDWWFGXSTG\\UJMEDQXAGSmBEagIUngbwGIEJcgJaEaNIReFBT_GOTYABMUACNCmPa[g[KNMAQQF]QQcMISTHbCN[[BKKX[sMODYIPOhIDQ^DVKGGFQPAiQgBIHYGd[GOTSJ_CWHUcMMMAOTIrE@Q[E^_SYMA}RUKAYVQLB[KQWN]^ADa@RGGMLQ`JJGV@\\sIINKB_hGCGpePDMQAiKcaUPUjALHB`HTAdF`MlJHHJdbEPQZC`VVHF`HJ^B`VVXXBXT@bJHNpSDcO[LYKCNZ^@LSJU`APLLfBfVZFJP@pNVy`YJCPSNDl\\@lONTX@TN\\BI\\PlVT\\Jp`bJHYGOFeQYLWNKTCLRNA\\RJ_zSzB@sdTXI_]TOOKIJ[IKqTOKSqKKICQOMK]PJEDYN@ZeO@@O^M^pTVPl\\^FCXH|EPBLThANNDO\\^HMbHT_^ED[n[nEbSjL\\@VQ_DSC__{QUgGCGcKUYGcYE_HuOEUqM]YeEQBKWLOQLMEQ]@FWSOiM{[SU]OMa^iVIAS"]],"encodeOffsets":[[[117166,36326]]]}},{"type":"Feature","properties":{"adcode":410600,"name":"鹤壁市","center":[114.295444,35.748236],"centroid":[114.31602,35.721499],"childrenNum":5,"level":"city","parent":{"adcode":410000},"subFeatureIndex":5,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@rQNWZEVKRcJgKWD]Gcb]PYrY^EhY]jCVFZOTAU`G\\@KSOCE[FUnM\\WXC`LHXdNROZJDRVF^QTJBTUJ]jNb^PTV|\\jNTPEX^@FRKNPRKLXRAfF^ZrNFVvP`GZFHdVZdLDHhHRV`|D`CT`UR[@iKaTmFm\\C\\]FS`aGGN[]PCMMgBKSOA{FWGD]Ek[OSU]o]N@PP@YfM@CZIFOL^PNDRLJrLLTSPLr\\JJIPLSP`^WJcS@tyAyTI`[QMBKQSDMLKXRZEfHPGZaIo_[IUSOkJ[[ASMW@MSkP[@CkTMDOZIz_MU@oIOYEeUeAKKBOV_TI@KY]DMZL\\KdPTCMoIG@aWSWAUW_U]AGIE_"]],"encodeOffsets":[[[116732,36562]]]}},{"type":"Feature","properties":{"adcode":410700,"name":"新乡市","center":[113.883991,35.302616],"centroid":[114.095247,35.263966],"childrenNum":12,"level":"city","parent":{"adcode":410000},"subFeatureIndex":6,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@­VeGmBAMsGmDMGcFeAiKHQEkSWQGa@iL_BgKUMSY[Og]MmOSOM[mT_CMQUFA\\_L_EKICN`TWJIbHLZLWpXARVGVQF@ThCLfe^FZTTOOJEPNTd\\AhQJSI]RUECQYIQPcMGW_KWD[XmNEVF\\PDLT[@_HVSBYPUEiD^gZ]FqZOZa^HdC^LXIhQdULYFMXqRUG_UYDORaFIcGGkI_NcESB_GAKGiBOVbVLdBjNROCofDHgHA`MLJJ[tU@IH_IKRHNQH@UUQGcRcOiDEONIEMfKkK@OTFL]E_S_J_VkQ]lQRWIGL]@iA[DK\\OCI`WEAQLSHgSEIgSEEMok@cO_TSCM]@KJoKkMqP]QS@QYPQB[XUpYjaVeHahwKKS@HUGE\\UCWNWDkt@NKHs`gD_YOMQ@eXyDYPMnO@S|HLUNk\\}r@e]CHQTGSMaKSSYiEwIf@`UJO^GNPHrDbIVST]\\StEP`¢EjZVd~VBn]|@lTfDoXAzPP[ZMLKbQH²CTBdX`ddFbQtaÐgxHbN|N¢OvKfTb]\\C^MTFxF\\VH^UXuj@X^`TDz`PRC\\L^VCZcB]TZl|R`RNP@VUbWVg\\@RRZXT^NLf@HHC¦rNFLf@@RYHbjplVDFh^QDO`QV"]],"encodeOffsets":[[[117711,36230]]]}},{"type":"Feature","properties":{"adcode":410800,"name":"焦作市","center":[113.238266,35.23904],"centroid":[113.137719,35.114644],"childrenNum":10,"level":"city","parent":{"adcode":410000},"subFeatureIndex":7,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@VM^A\\fNFLdJFdAZIp_J@bZPHPX@jQ^YjI¢NXTzDOzTfL~RRbF^HLbP|AtUfFTLhhZTThKDgjGxEfDhNzDREn]daFxZjTTbLTNSHGR^D@fq[~MlKV{G@TmPONCZWz@fNRZPC`_hGtMLs@ClMXDX[VHFGVT@LLgxGbUfiboZWVA\\ORY]YASUmB[XaSAG^AZIDOQCQRMSCWNWsP[@ELQAQR]JkKeBB]MSJQGMSLUKFQTCMW_IAWIB@gYGDUWGePWEWFc\\KCkPgGkNOMFUQMBkL]EYKCeLaOWABYO]mWYFSGaAUHCLJog[G@WcgQBRkIsH§WOA[SiOIAaOQyW[UQeSK[BOSiAUDcQaBU[FSNIBULMKhA@mHAK[DyfLhMjYtW@hN^DtI^["]],"encodeOffsets":[[[115536,35655]]]}},{"type":"Feature","properties":{"adcode":410900,"name":"濮阳市","center":[115.041299,35.768234],"centroid":[115.287416,35.809288],"childrenNum":6,"level":"city","parent":{"adcode":410000},"subFeatureIndex":8,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PRTnRR^BdEZdGbNN^YR@HZAaRR@TVF~JnAPIXFz@hZ`ZCP`Pj`VbADbOpFVPF]HALZDBVVKBVZC@RN@HRddJjnf\\dRjr|tbZATPhGTRjOLP~@ZzFJ\\EjR@DbVEF^PANbf@ALX@R`SJRhE@NlAFZNHA]HBBbNH@`LFIVWBFVNDRETJ^PxLpA~STNH|V|VELbG^X^@RTXDhMyYWu_sGySYSSCcLoQY[[DQLiDgKc[NCWS@OUEyGcHgIWUEU_SQLoIoQkuyAK_QS_iMQyb@dRrJnUHJP\\CPpFvGRSRFbLdpDTdpZpJJFBMRdNGPHTNAd@p[HKfYCCgeAOQ_AEbI_MU_AOsSOeOOFSG_HU\\HvkP_jGZehyZU@ARYaeI[H@N[PeB[UKwKA{PMA]aB]GaBeOIQGkJ[EkYAIWCnSvK^MAMQM@[LJLWEQLeQ]OuLeM]AQUeMIaGEQBcXCFKIimgY[]CKUB]faP_IKPYBoQGIU_E]cAKROD_p[ITSLBgI[UEYSCUREpFGqKUDIfMHge__eRUP_RC]"],["@@LRKN]K@QNIPH"]],"encodeOffsets":[[[117778,36186]],[[118278,36761]]]}},{"type":"Feature","properties":{"adcode":411000,"name":"许昌市","center":[113.826063,34.022956],"centroid":[113.715606,34.071457],"childrenNum":6,"level":"city","parent":{"adcode":410000},"subFeatureIndex":9,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@[UBOMGcGIWuGMNYDAZMJLJQZcPISOVSKOFSS}HOVEVSCDX_FIPOA@TwLENcGWMQRFZGPSHID}CCI_By\\YKDGaYiAgHSW[I@UYAFYoLUOU@]\\SBS\\_TO@kNYCUMuNYVBNMNYG_JWYWH}`]AOLPhYFWAoFHVaLIRo@S[JOMSBkAAOOKDWIASYY[@Ya@IQQo_QNSUA_HIGO]EoRQfGTKDOGSBU^iXUEWHS`MHSPIjCNXKJSP@LLAVZLJCN]^DH[dGgUO\\yVDBVRH\\Gd@TOL{X_ACQq]Ia_kISNcbgDQIeJ[NGiY®oRFZMFeN^J\\AvNJMpDHaVQMWJGpCWWBS^PbMRNANPMvFZIdEJFH\\LFP]dNDV`HF^WP[DCVP^THBjPbChyPATOFFPVFFTl@\\RQLZDJG^FTEJJB@J@DJJAD]vCRVCnXF[~DRVE`FDIZA@L`ELX|btPn@nJ`AbMJ[CYPEXFVcb@@QVDVYF}W[COdS\\W\\uIMNQbLBMXFPIZBLItENWMhTFfXdA^OBIRS@@TVBHZILJRURIÂTPEdJH@haLO`KpUPAROVNBJVZFbYBbX`CXYT@^YR"],["@@A@@M^GC^IBCII@"]],"encodeOffsets":[[[117003,35074]],[[116545,34700]]]}},{"type":"Feature","properties":{"adcode":411100,"name":"漯河市","center":[114.026405,33.575855],"centroid":[113.905678,33.65448],"childrenNum":5,"level":"city","parent":{"adcode":410000},"subFeatureIndex":10,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@JVdAFZPFAHHzANVh^lNRVTB¤AhWVATR\\FFLTAdfFTXBDVfDJL\\AHIhKp]dNBO[EAOZE^LBmjGCOTGXFRKQYh]HlbLhCbPhDdVIdHVE\\RPLYJGV[pBJ\\LEdW\\AhENAfSZAX[c@SQASaOMLSOEWqDQADhE\\cCMHXXVGdIRFRCCbMRD^TJTCJN[v[XcTDPX\\E~UZUC@Ra@UdWEOFDZI\\aN_BmIm@sO{aKW_F@KYBCJ_EUFCQ\\}WEDmQUuD]H@NIISF]EIHYCRK[Qk@ESUEEOPEBSzODgOaAiSGO]DU\\CXOE]_GCUcMO^KEG[IEcFYJuEONBMQMaN]OATXXoDQIPQG_NwTEn[RQMSaMs_EIqKD_R@KcWIOGAHaKAMP[@OIi@GHJiWiBgMMF]^AnMVOTZZ@PYxB^EPPpCrVNEPLpIJW"]],"encodeOffsets":[[[116417,34210]]]}},{"type":"Feature","properties":{"adcode":411200,"name":"三门峡市","center":[111.194099,34.777338],"centroid":[111.112608,34.36205],"childrenNum":6,"level":"city","parent":{"adcode":410000},"subFeatureIndex":11,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@STUFq@UWcR]SiNECKQMD[EW_SUF[]gBSWyA]ISScAGMTSNiiWaAokGkWE[UEgKQYSSDMNSBaEYSMAKSmG_B[TWDOQ_CiYPINSDcWaIWMYB[RYDKKSiaG[XFSRODWOgwIeKI©IUcQsW@W\\cV_AGMDS[UaSOkGQIecSCQNO^aZ}HWCQYOKisKG«HAaGg]@xY@UKwMYScByVWRGn@LKYUcAQPqTMBQ\\[DUNMB[NG@OlWxMRNRAC_`ZSBUI]qFOaa]eAI]LEVeEU¦Wf]`DxMLeGCWAZOPQES][HGUQGUkWFMEBoE]t@PXXSEMLEJUVYDohEHgKOeCqYAa[@gMIY\\aXGA_`Kn@dLd[xIV]FU`SXBXGbBF[^MPeRGB_`sSgFQPKR]`KjolAJIQVU^@\\YpcNe^SJXVhC\\TXJRhV^@^TLPXK\\KFMdP@VLfEVJJdRRDfC\\BXZr\\`ZHLGjA@vihQ^_PFP_VDRNOnV@NOXFVTRhEdJ\\QZDFZfnhTXXCXBfYn@fXz\\PQb[@UNkBMRA^OJ_MITQA]LIT[`iFMbXc\\PL^BNjKL@nTpM^_dEVMLeDEHFbN^RN^@dHDfNB`X@NNjNDdKxKAnf`VFN]dChB^NXM^@TRpR`LLx\\JPZXnF\\ILDd\\ZLTQTR\\EVKª_ZMTDWXQr^@THLR`fELX^Aff\\PV@DXNFCtybBpgZjBRVT\\HHPRFM\\XfCRVAHpdNANeLJPEL\\@PXCP\\PCBOAEPXED@CT[JENPNMNyhERPPSHoMQBBXwjoD_PBdLR`R`JZ\\b@ZBTkLGTTH\\@EP\\PqRwb@LfX@^^N"],["@@C@AGDABJ"]],"encodeOffsets":[[[114661,35912]],[[114721,35618]]]}},{"type":"Feature","properties":{"adcode":411300,"name":"南阳市","center":[112.540918,32.999082],"centroid":[112.288385,33.044723],"childrenNum":13,"level":"city","parent":{"adcode":410000},"subFeatureIndex":12,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@MW@_`WRy@oMeq]^y@QL[RSBSGUN_GQsMAURSSCAUK]QK\\_WBZa^KJQ\\SDIfQNaioPEbbXL^DTIRYlSHaNGNUbBbQC]\\]D]sOaUEUJExHRIHfI@cf[TeJ_KQ]OOWE[N_EuRG^^TLVYAwHInQ`SxGlQJMVwTWCMNMFWTK^ATJ@L`FCPNAPYKIA]YWWTESUPKC`SpAPIGSXYi\\iCMJe|wfOvb^d`PNA@aJWxRfQlB`YXINWhYdOridBDK|EJ_PMhEtHbPbDPIVcTo`GCSVDLQN@fXLPTH`@L[G_ROXCISFKRA`[`KLHNYhYPP[AV^]HFR^@PK@ONKMMPpODOjSHONAv[VUzYDbRTZDR`RDhGFPpQFK[IZ^ZZFHRfKVL`FRK\\fBPbI`U@KXANH`DfM`WvA\\SxILR^JB]hQ\\BR\\x^Rt^TDPKAYXE\\XRFEZET[dBHLElXbXBZNtMRYhU|JVoBLHHjAT\\V\\BtT^MTepa\\KnaF[xOPS_SBO\\E`cbGXHdUHQXAVORBzR@j\\VHd\\\\GPDEYH[TJIbIL\\VfFGXTKbBYR@NVAPKZJ@`XNNbPVXGDZPIXFNIXJJSVNOH^^L\\@VNMHXX@RJDhIhRtLFUVLVZNPj`XRFIFSb[VLVUVQFUEbW^kXwEg`KKgHQJI]NIFqsMDUMBKcWQMkm[eHU[@OiGiV[E@TUASJ_`kPegUaMMYHQKaTITKBKQMNiLCHEK]mO_AMTDLIjLRBdUFKVDL\\RRfTJ`IPSRELYVPQbqHJTSTcBK^_@D`PLCXmrP\\AZKLRZWZSLFRRJT^RJT\\IHPxSHa@iNKRSHKSqFKRWJVvN\\J^NR^NhlHVjPHTbHZKdX\\BNL\\E~@XIZHPNpJ|nF^QNJVETH\\_\\NBNZ@TNhXREv_HN`FEZNPMZNyToUSPYFYCKRYN[@EPUB@\\]VelITaLiC[O[BEZ_LF{QGNGdHTXXGLAbIRH^UP@PQAI^sRMCGP[RSA[PMbsCqTIOeH]OCgOMsEOLyYUMYVSAMPePgAaDIHgNGN]CWOaDKJATULWAY]e[QJeIMNDRkfSbaC_FOJYA_Qa@]IORiCibK^yZeCSRSGSD_E{_KJAXSNSCQMOkU]UQ_MQCIJ]PGPmIGkJMEid[@SQEUNQJLJMQKsEÃ[[Bcb]PiFiEUFIN@zOf\\£lSBWgfirsTyCoNuAcROCi]U@]XTjQFKWF[IOBUV_JcDS^iBKHYG[_YqAWD[CeQQIcUIeFUKO@NcLEL[OWSK@]U]QgWI[SgDWUI]T"],["@@HNKH_]dH"],["@@ELOCVG"]],"encodeOffsets":[[[113675,34366]],[[113699,33975]],[[115440,33134]]]}},{"type":"Feature","properties":{"adcode":411400,"name":"商丘市","center":[115.650497,34.437054],"centroid":[115.702245,34.28898],"childrenNum":9,"level":"city","parent":{"adcode":410000},"subFeatureIndex":13,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@`EZR`@PK~b]Z@CV\\Q`CNQb]ZO@ePQr@AtVHPGH[LI^BNEATIb]VYLWI_Y}HaZBZIBWlIrgCSPGCiaDAKZAHMMSfUBYrB@OTanKrf@p`NDnIFZ`KdBljpNR\\XIDPfJXEXHlF^nZQVAJPERF`BPZ\\BVRbIHP`CHTXDFONPXAENF\\RN^@`I^Q`M`HItPZKfTVC\\]HENo`@PMJHVO`QNatGZQ^eJDN[ZNHBrTTjRKb[RGrJRGXVD\\T^^@R_T¯XmKogSCOXHLMD]UDOaCURWAeIEISTVfQdMPyTyZYbWDKT_L_CuPGPPLAPUXu^G^[^drAXXB\\X@VYbLh@jMIaSAYNSZMbabeDwYcC[R[\\QFSEMQAc[MqAóWOGWD@MUEjRDYTY@A}[[]DsVIHcFUEsAqBKEiJeRqrYfcXEf[fDrCXU^FRZVYAPQj[FFJOZ]L]EmRURaJYP]@YMmDUQV[Ug[DXQKMNGSgJGSWOQA]XiI_aÅDOC{WYHOE[@}][D{^aXSBAMCME@QNQpK@Mee`IDeTGpTb@rUJIASSGiCSIEQROG[FcGUPaFYAuPBFMMMTEM[HMO_ZFG[KAQaOKS@KUOFMTMWC]PEYIFeMAHSnGBKZMQYcGKNIPqXGhaVEl@NOlWfBLSXE^FzMVk~EVE\\UhBOg^g@aKMA[MYN_OKDiGYXCXO@Keq[EqDQC@QRU[YOWHKO_OO@OhK`ElF@ZPZTDdINQxB\\P^`Q\\PBv]VBXPDXA^JL~HNAK[FOjAPR^F\\VZC\\SxYOfBHhxV\\CTHb@LFX`FTExGT~DEPH^EXq"]],"encodeOffsets":[[[118430,34878]]]}},{"type":"Feature","properties":{"adcode":411500,"name":"信阳市","center":[114.075031,32.123274],"centroid":[114.889128,32.080437],"childrenNum":10,"level":"city","parent":{"adcode":410000},"subFeatureIndex":14,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@@YSEB]POHeZWZFLcgyDo_kUGER]FLs@_bMFMb]dMTYYaQCUa@[TONBZKT@dMQeCcVObIFO@cG[NU@[j[RHJIpRVhPRbHDWl[D_S[LY@iZON[@QNSTExhnATHVAJTRF\\EHZRRjFPj@RNP`GZDHT\\F^G\\OZS`TAQZo\\[DOpuJSl@PFz@pUbGTLbIFQXD`MHTVIVPbIhJG`JVX@Tq^HJNAXLFdKTFJUKWFUIM@aXOIOYGE{WGS[HMISB_X£XMDJZDP`bDJNtEDORCHS\\_PElDEijDLMbLPETF\\KP@IQBWPK@SNGpCVQLWXHT\\rDBOTATJ|NVUHNrfX@Rc\\MH\\RFSXRLZnP@PUV@bM~CEVRDXPOVJVOLHXjVCjTF|FZKFkZO@K^@JQpBIcYoBOMcJO@eMcTgZBhKPQSiTIlZZINUZA\\PRZfGfLTZDrJPYhKtLPXHRRdTZlFXEHVbBRfXFH\\[lNHDZTXhTb`lGX^dJJP\\TdNfbnJbf\\CNO\\DRIdEEZPLjBLJhMLM^ANU``NGZZPYxD`bT@HhAPSTUHFDZZ^TtG`ONF`XxBTNAE|QHPRIZFP^RFXUNKjZAZH^O\\UX@XUrDvN\\U`C`QDNVC|KHAzBdSn@VSPHNAdeDTXPDDbQRANi@MEBPTR`PFbp\\XVf@cViAGQs}_KKMBocBga_aMALXCT[`WoeKmTcTSO@MROCImCL_CUKQOkSABjWWeWmjeMmaUJ`NANiFS^]FBLQFYITYX@PM@@PY@uZJVQDEN[BQIFXA^QDUUIJµSQDFOgAORHLVD[LPNKJIOITmYYPNLMHUCa]FXcCWHQVaDo]KSQNFX_RYAYZA\\OHsO]ViRVy@qU[@QJSIB]SaMAmPKIFQWOAWHKMFmVAP]ASo[ISLWNCG[_@k`aMKDKnUDWQ@csCSXaBcQFqBWKAYJQEi\\UESYSNUxM~e\\YEWkIEMFWYCEY]_cKNOeC[c_EYZoFMAA[MA_R_Y]NQBOUq^iAMLA^gTArKdwRkQMJKPVU@QQ]^MZD\\KPaGKQaAERRJATUBAdKLqKGaBQMEiHq]_HWAIHCtRBUZIZBVKT@PUHC_MOQsGgDORAZ_|DjMDU`EVOFeEMD[`OB]KMJa@KGAaKAQE_WOiYMKUVUKEQsJgCgQIW@GWMN@UK[]]PGbMLcVEDKS]PQRRR@DUYMIS@[XQR[IIAcDOWBQG"],["@@BdiSIOLURHGXHFTO"]],"encodeOffsets":[[[116480,33048]],[[116499,33059]]]}},{"type":"Feature","properties":{"adcode":411600,"name":"周口市","center":[114.649653,33.620357],"centroid":[114.883192,33.721762],"childrenNum":10,"level":"city","parent":{"adcode":410000},"subFeatureIndex":15,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@@NTpGZPN`DP^KF[ZGVQCclKVMfGTLLQVFGD^HJhr\\ZO^ZZ@TThGHLjKDVRAAjK`Dp~TUN@L`XC^VVBTO\\D\\XFZEAZLtaFAhQHFRsAENbrYbAZFVENP@BRXSTDF|IDNTKXllzcDGR^GNZdP`TRQZB`LVWdTrFLGN^DN]OP_r@^C`NBUXLbM`W^QJIZMNDPdRPIpOPjD`MPRHBZTJEvYR]Q]BWR_KKJWA@ZR@AX^TQJFZNLAZRHBrTFFRMFPl^FKV\\TNGjFPHCTL\\Wr]FOGF}CHSFwESW_KEa@SG[DwUGgeAPwZ[TYD[U]EOQiBEPL\\MB}GIKB]CWWOUAu^OAR[]_[OwAMRcJSCOY@YkE_FgL@PPPP`GLPX\\ZQV@RRDrC\\Ffr@LWPWDHZCjPLM`NZB\\LN@b]hPhgA[VUF}FUlyN]EWFKTeAkXMPk@UFIe{JmTYBA[eQqDOK_AM_KImQKFS\\WFo@WLi@YXmASTWFKKH@ZmCGpKNQEaDOZMJaBAUQ@[PBRYERECaSILMZCZK]oKGcCWciG{HWH_`wB[RYCOcMKZQ@]ZSDWW_AaZEaUYAIUMPBQVOLoP_bK@gIGFcSOJÁVQIQJKGYUA@ST@JQPAB]WcEegSNMXsFKJYAOJWEANaKMRSDSIC]NQDaQDEJQHcWUGWNdDF[CgRBrCFXTPNKbPBTTRd@\\BWTYBeFMBgX[Fc[KAI\\oHUZIKQOF[GUJcpReDSZBNM\\PjFJFHZSJc`LVOCcD^NbBRGTaAULKC[TCHW`IV[PEnJRGPgNEGMfDBajHbANWDy[e[AWaunSDYXGHeVIV[hCH[JGBcpAJUdD`AbKJDFjJ@L"]],"encodeOffsets":[[[117655,33881]]]}},{"type":"Feature","properties":{"adcode":411700,"name":"驻马店市","center":[114.024736,32.980169],"centroid":[114.156353,32.922684],"childrenNum":10,"level":"city","parent":{"adcode":410000},"subFeatureIndex":16,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@LBBbLHb@NI^LPA\\_NCfFPEFUV_NCCi`{BYPQhCtHPRND`VG@OLSAUJYVYQADsJGXB`Gr^jGNFARHbrLLKBcVABSQIFQbBLRbHLOC[NY^]RRV@OULNIlRxQLcBqhSB]NKjBr]PVRA^M`Z`QNBB\\NBpEZY`F\\dfDMPdL^`FZZDEXFNlJFX[Z}fwNMVZTFT[VFjIRBZXLrAREdbATWtD@dXRVCLmLCbNl_`@H\\MDKXJTp\\BTO^UBEnLNXGPBRXELJnONBTbA^TJRI\\@rVz@UjQ^UtPPGB[ZYZB`QEWRMLTp^bCXHLLSNDZMA@VPHNSA\\VT_KDhWTIGPM[KDXMJJXGNJfILVMLAVRF`ILDKTSJMVL`MX\\FGVOH]CaLI`YNC\\qD[K_Rg@HCPRDA`WD]L}BeAaIOdWLOZmDOLGXhTSjpIRBZR[TAZOXJRK\\aH@KIEiICaL_BcCIVoBAdIHG\\gDU\\UJGfWHCZmTbvBXf\\\\CzMXaBiGAbeCHNMFOhQHmIOFU\\_JGXSDD\\KLBVSbQHaA]MCDdUP_KIdYTGIEiE[OMNYACTfoQcUgCaOgDaKGkg^RZQLWESHDPiHAn]KYFBP\\FAPcMo^gLGJ[BIKeCCUWAESceSBEK[ESQUBgX£BSAQUkMg]MUyBGGBOEEYcBIUU{mM_aFKCqYYQiK{KqNu\\sdBHI[kQSSGabMKgAYJUkQFQTWDKP_MBWHaGe@_MQkE]{moIOMYGWJ}@[FMK[AcWYLaGGSiOGUgk]MMQI]M[UuXILQrELTTGLQjMb@TGOwJGS[QIS]QIEQTKXYQYLKBYO[nqDWOKC_`@L]dATSISrGRaUOKZQFOT_JSIQe[QCKLUVEAcKQJiCKNS`BnPL^FDGjKNMLRLAJSbSRLZGNNVbfhlO`_TIVB@S\\FjUjH@PV\\fGn\\NlXRLdNACVtNErMJJ^RIhGLLh_xFlWX]aVFREVUKU\\UTaJE"]],"encodeOffsets":[[[116546,33384]]]}},{"type":"Feature","properties":{"adcode":419001,"name":"济源市","center":[112.590047,35.090378],"centroid":[112.398673,35.099131],"childrenNum":0,"level":"city","parent":{"adcode":410000},"subFeatureIndex":17,"acroutes":[100000,410000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@[BSJ]GOgS^J`WBWRANS@eVE^MBKYKd]UASbIF[eK_FyCMSQBmVoIoXMIUJ]GXmHUE]]QGA[DeG`SBWUkAeKuJJNGNuFcPN]KQJJFkLeCaFGQZKXmDkm]aKAUVY\\oKYNIU@QNUAmQW]BGWPK¨D^AdOvKdYf{rO^Qj_VBRX^Nh]hI\\BtUtMLKF|KxYNMRF`K\\BFlS\\W@IQ]BRl\\EROpNZVJRV\\bAdRVCjBPT\\ATLRf\\VzXPRBbPJTjB\\XPG¨JtQl"]],"encodeOffsets":[[[115465,36050]]]}}],"UTF8Encoding":true});
}));