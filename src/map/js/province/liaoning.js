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
    echarts.registerMap('辽宁', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":210100,"name":"沈阳市","center":[123.429096,41.796767],"centroid":[123.143796,42.100641],"childrenNum":13,"level":"city","parent":{"adcode":210000},"subFeatureIndex":0,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@IJgE_ZyLMT]NSG[@[UoBQOgISGMUG¥I[Ec[UaWSYCmsJ}CSOOQe@OXKND_KM@i]Q]AkWYAsgSFcGOHwFMHSCSSJGgQQAafCQUAOLBOYc]MUHOQDDRQBECiF]No_SAcWEQRQZCn_BWDfGIGHWjYVWZDLCVJrSGMNS_HOMCSWOIKFmYIKBOKEEeQAcJU@M]ON@OQLgEELYAMLOOCMY`DIOHM\\GJJVDHUPMRAM[PKX@P_CG}GYBg]WA_UKOo[YAYBGgWWaKJQAGKKHMIU@Lc¿q[Ã{aLKMHG[BFWHGbAQMTMWKOYbDJM[EFS^CKSXOF[^DBIQS^O\\kEUNcA]PcTECSJSEGJY[HD}I@STOLYCSDcxUXO^GCGfQVOZ[PFE]VCxAHKiUQ]JQGGB_aGMSBgcSKNSBAgVEawOF_sCOPKMSKDPcTJFQOSFQVK^JPZENMTIZAHI@_LAjPRGEULI[YZMGOMERo@YII\\DHO_OFW^QODK\\BDG{qQYa@F]Y@KMNEe[MW_[CIPKBbqFYNOVFHPnDTVEL@bPLDTbNJVPLM^VR^NKPZBNLT@Dn`bRQNNd@JNJRbAj\\RPSTPLIx@^VaJ``UDDH^MLPIFFRIDBTtUbV@TLPUFCMWHX\\HRQTDNN\\vRVjFXNGDRb@TlbJVjOUgSGDiGMhGGONSRD\\CZZZ@LGLHKL\\Td@BK`O@UdCvAJYV@dIVWVABPfGRD@QhJBQ^KTLTYZMAQTEVLRQhEX`RJdGXXfU^LhXVI^RCHZDAJTHHNdIdPZDNQPNVKBI`KPNfHDLO\\SFLPUJEXb`F`VSRUBGVOBSdHLVFJXTAdrKJdXHVUT@VWTO\\N^_N\\XMVUF[INKCS]JyQEFoBBJmDGTHPNBRNG^ONFJ~JZNj^AbeNIJ\\J@VHPRHUHDNSbTPKFPTzJVE`heNCNKEBfRL`GRMZRHRKJJ^MBCNSDIM@QMMEHwXFHQPW@OXkTAJuN_G_N]@ANUPWHeT_FeZ]DARDvMA]TaBcWcBUfQJ`tXFObHZRR`JfnXpBdK@KTWJKTWAIRaTT`GBNbofAPf`LRdCZNZdZKPRXFJLPAJPXGBTrEP`EVPCFThTTETDAYLQUSlIJKhhZ`BLVaJIKUDJPMJWCC\\_AG^V@MTkAUZUHZJCLsVYNKPNT@V]JOSUM[\\R@GV[JZ\\WLWZ@H\\ZFTTBBPQPRNZEJNSVNNMXC`ZLWR@ROLf\\EHcJBT^PAXYLFVZDFNg\\CL_DWTQ`PPZFId"]],"encodeOffsets":[[[126528,44038]]]}},{"type":"Feature","properties":{"adcode":210200,"name":"大连市","center":[121.618622,38.91459],"centroid":[122.190893,39.593378],"childrenNum":10,"level":"city","parent":{"adcode":210000},"subFeatureIndex":1,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@@zG`ULERF`GPcPKREZNTTNix[HgMaXYBSQBPODDfO@ObrVAXNLETYJWSiCidmJc@EO]@]nqEaZ`O@WLIEsJKNQESY]VmgM]ID]dmDEReDaRWlN\\gDQJ_hK`@`WPsDUFFfYSEUQK_qKGTaMS_IUBQQCQY@GHeJWCiW[EKS[SIO[FQOHmGUDUU{FOKWRMCWJS]N_^MMWaDQSBMlIFGIa^DDMM[XSSKkFg[DOUNGRiHiXbAH_ICJuK_F[\\cDmKeWI@UX@JSJ@dWNKRWYYQgCCPWHSbcRcI_Xy@KGQbOBIXUEOHKKoIYM]BUTE`NH@T_tcXqkOWUmk[BOU[BgKBU]S[aKOOGc]SWFy@qBWKus]BUEG[KO[cEgN]@CWKSUKIQa_mKEOF_\\]CawYDOfWnqO]FWKWQKCKE@SREDQKO{GcQwGi@}OyJeM_SyoOUEgDgPQ`OP]VCJZ\\XPYTMEW±gZiXCGO[BIOVU[[FMRGFQ^@`VEB[JErLMXMVC`JXSFY@]tKJGAeTIT[ZCVXNKTN~fNVTA¦J^VV^AJLZJXRPBCUU[NUC][R[M]NO`BBQcM[PUGcLKOkBSWJc^PZ[dBGQUFNYyJWC@WVM[QAObw@VQDSXCBSPQVKAGsmgOAMmEMIAP~ARI@woAGy@M[]eGOSsWseOUN{I[BMVgVOZSAMY]ESMFO[KISQAFYhEBe_QYCUJmAa[qG__e@OZaN«ASOKQg]KiP[GF[[OIcHy^oEQ[M@O^gNJCE`B`ZNVDT^TnnFlXHZTJhHS~CbLnAlNLQ\\H^^FP`NNbVFLR|C\\GRMCbDVVNS^RD^XbGbRQJANuLoSKDET`HDL\\@ZP\\lATaHZRVIbAZGvApNFNMZLFxMDUZo@azi|OPDl\\hJTNcJC\\HRKJaPw`ETQ`DX]ZHBNWjUD@RbEoTDbNJrHYVJARedITDNPFpANDhhh\\hHdCLHEP\\G\\J\\M^xJNXRNè~RNhlh^KD``AfLj^P^xX^hNDCHQA\\XjNpdtv`NNNnLVJPVHdZLlObLAà|DHWXXHV]dPPRGVRTRFBPGFNQVF\\GLP@\\rh`FDHUP@HbJL]\\ACNST^LFKVL^DRQFHXCCZPDtgBU`HN\\VV`ALEh@LIZVCTQD@RTDrGHIhPVEFRaVL^WTgLDJVCNMVENHMX^JTIt@`FJKrGfBC]LQxNlFNCV^`AL\\JHPITHBP`@"],["@@XMGGNOTPCPj@ZIt@bS\\RVHaBmRQTS@EMGgN_`IYKDE^KH_SKNGIc@XStIhUZA"],["@@V^LCPN{MCK]EeBFQWQeAJOCaRERWV@`RFVGNdDHKXMNFSRE\\MHBP"],["@@VNfDPERFhEM_MIHIhVPEJXVC^TSLCPCUG]AiFgCMQXM"],["@@ENOCCVQHUGK`QOUDXQH_ZMHDlKHT"],["@@[PQEnM@D"],["@@HSVTMVLTUDGONIQCFO"],["@@\\AdFGNUFaW"],["@@naVJgR[F"],["@@ePME[DIRaSYeIYPBdGFelG|jZb[\\"],["@@JJYGPA"],["@@WH@KTORPMD"],["@@HlUBBaLK"],["@@^RCTU@GWOATK"],["@@rBXLEPWE]JcBSQVOTA"],["@@@MMBGORGbLGPUH"],["@@M@HQVGFNUL"],["@@JIJLSA"],["@@JXWDEEYLZiPCDL"],["@@BPWHGNcA^Ed]"],["@@BZbD_TY@kLBYZYPFDMRA"],["@@VRELYIJS"],["@@OEXSbLNCHPcC[F"],["@@PSTFQNQ@"],["@@TDZZ\\NRTBVKT]LD\\[LEIJUKAqJKWT]MaBSTWNA"],["@@XRGJUB[IHMZE"],["@@^HORUIHO"],["@@gEG]XETLPALPKTKC"],["@@FSPGJHKPSD"]],"encodeOffsets":[[[126484,40725]],[[125509,40217]],[[125322,40140]],[[125584,40168]],[[125709,39956]],[[125364,40115]],[[124751,39807]],[[125357,40167]],[[125362,40214]],[[125976,40496]],[[125244,40142]],[[125232,40220]],[[126019,40435]],[[125540,40148]],[[125453,40165]],[[125774,39997]],[[125757,40020]],[[124756,39852]],[[125822,39993]],[[124393,40128]],[[126041,40374]],[[124409,40135]],[[125725,40174]],[[125729,40018]],[[126117,39963]],[[125957,40191]],[[124072,40023]],[[125280,40291]],[[123880,39896]]]}},{"type":"Feature","properties":{"adcode":210300,"name":"鞍山市","center":[122.995632,41.110626],"centroid":[123.016394,40.718251],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":2,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@qUkIuCgKY@eHOIQ_eWeBaIsFcOSWUIeI[Y[DaCgwZ[UKZ{^_^W`CRFXbT`dAJkVWHeGGTLZO\\NZh\\AR[b|JNLBP[hJ\\^RpLrKVJbB^CCRVJVbY\\LPR@lTQTJNcXKBJZCNO@IJ]FWMS@ONSGDLIdJRMFRbWHObSFANQBUMoNYCKRJNoTaC_c]CG\\[DWWaLEUYESUISHQMTKUYO@Q_P]_QU]DQOAoXANQGMJOC_DDF·V]P@LWZ\\k^iTHNMTdLTCMPEZarAOLDJ`\\NXf\\MFLNZ@E^b@RZ|rCH[ACLP]REX`PGP[CJJ@ZQpNFHPYN\\ZKJFVQHiOKB@`GJYBSJMNYFO]IULERPTERSIcQcOAEUGu_W]DËksLCOQRMCYZ[gEID[OMFQOYE_S[IaBeKM[KsMTMX]xOXBRU~NA\\PQLfFPVbNFPhh^OBTILPdAPGqeccWCgAGQUMaA_YCKL]\\CCsZ]@e^UHMAwIeL_RS[iKAORME@SSDYVOBcYHO^NHCKUgMUF@OlOBGYUJ[WEYFRQKQ\\GdVVO\\B@TNLVEbLlFLRV@`Gp@dME[U_@aTG@M]WGQfI\\BAQPIAOjOIeHCsIVE\\ShFEVQB{][[QBaZODITPpJCQSGKUAQOETOGWMKeCt]@SRAFVbCZPXAdYTGZFxOvBTQJWJ@ZitIPIbBdTdAlQ\\YhM^m`SY[LyEOeSsAQMIYFmIaD[aYqWSYBcSkDSNQH[LALaEYEeVEtCXO@_L_`gRIhCM[XkbQfCFQnC^cJCN^nh^UTZRFLMtIJFXKP@_bYrF^m^@FPd@nIjcjDXTZIDHbdtNRIhAGLQBKhTaFLXHMjfAH`RdANETFJZNB`^b|ARKDaGWNW\\bfN`NJLb`AZPX`XItbN\\TK\\FZPNDPjnZhTh[^lvEZS^ZlCN{PFHE\\FNKNLVEvaVGL\\VdPcKJ]F_TRw`YFOS@ILFZSPWBBNQFJJBhV`\\LHRGRqhY^UL"]],"encodeOffsets":[[[126499,41807]]]}},{"type":"Feature","properties":{"adcode":210400,"name":"抚顺市","center":[123.921109,41.875956],"centroid":[124.662356,41.837685],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":3,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@rZXDHcKWTK`BfLpLVJDPChPVjJDXgZBZN`HXCYx_RALNMVmZHZPLAnHR^pAPDjZP@hQtFdKRkRQOE@QnMCSVI~@ZYKKi[WYAkFOZ_PMhOB]JUhKNYH[^OpAHHOXLTXJXDZGbYtMrskANGB_ZId`LTEjN~L\\NPPfRXLXrFPFILH^OZJPWJFVEZLFQjRLCPHTbBNZOZfHNTVRHPhHb`FQVSfITB¸oT@Bhr@ZDfNRAnYdEFNvPPcZExNFXLNjUdCvHL^TJ``\\NL\\PTf]dERLt@VdDXWXCjJXZRDPUFM`C^eDibK[Q]BGK[DKGONRhAHTbEXNZKVZPST_DCjWRWnEpPTDXIN@XPR@`FZdJxAERPOVcFN`hFFJbLHZTEfLK\\b`ldNXRHLXAXKDITpBVGRJDVRCDLTFBLXTwpIBYQ[@qNQPSFGP_L]IFUIYPECKWEUFIGW@YJDXLLGLD^LTIF]m[GGFVRDV\\R@NUAbXYDmTLFJZYhRL^biNGNSHCLSIWJwYV@RRRKT@RQJfRNATNEV[J@RNLJVUNAZILUB}ZRJBP[XyPQAi[BMaMIIkO@cJKIQYGg@MQP]]KKNUWcHJZQJOX[DKK}BQZmEUJLAMiH]KSSGQLUPDDaTKUiWCWLWIeEMUY@cOaFeGY@mX@NRXKDoEWLe@ISPiYaGkOYaWikXRSP_b[AQacCKRY}mO¥Wq_QCKKqUcADUcSQEINqAeQ]BHLEPJNSR@NMFIfUDgQuE_HcESBoVL_OWCyeKuSOg@eK@UFNVUJ[IiXsDIGK{_Y[WI_gUFyIOSLESOTaCMVGQGGO@U[IJIfMBai]YM}IEIPMH]QMMAGOHSnCAIpAFEzR^IDTML\\JVENU[W`MM]P[XS@UVSGUcWLIcqSBIWUEGKTcPAHUVATQ_U_EaFWVIKOTEP["]],"encodeOffsets":[[[126718,42524]]]}},{"type":"Feature","properties":{"adcode":210500,"name":"本溪市","center":[123.770519,41.297909],"centroid":[124.574237,41.231499],"childrenNum":6,"level":"city","parent":{"adcode":210000},"subFeatureIndex":4,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@TMNgQRQ@UkmFSP]VIEQLKEgLMGeNEDQOcDWLED]JQ[a@GP_YEOX[S[jGJ[TOJWASVC`eSSGaTa@SV]PCVSIS]MUCBoUCEQJJAQSTWUk]MQWDKKSUIGem_`AtI`MrePA`PRefLPTV@JbJJtEJNfITLZCVPVQbCjYNF`CFQdH`QPDbdfNAHPV`KhC`LX@ITE@QREZPf@RRCdPN@LcbB`HTXb@LeTCdSRUn[h~HEN^FVLJCpiVK`NPZPI`BLTCZLPGPZTLPXFdATGDMKqLU^Dv`fKRSTE~f^LaRBzWNAPZlZD^vVdDLGnMjJHNZWjJBdRZlCbRALd`\\E^[~IhVpKf@_hGTBxIXDhKdYR@TZNAzNgjMPTJnHxIlVZBaVHt[NQD[PQIU\\BPSbDLOQKK]LAPUBE`RDXGrCD^TLZKJQASN[UY@WRM~QPHATYPBNXLjBNEDQMgmYAKhuTIdJN^bJ\\[NLENtVj@RRHb^TXETXIZHfLRdPR\\VPNlNZQJeBBTX\\TNZAVLNdvfQLOCPC`ZvTXQ\\}CMJcGE\\QbOFUSaGShHXmnXHPTCZabSHkISPNZI`oDSHHPKTK@KTLNIVJZAVOR_@DVY\\WLDZRFFR]F_X@X]PUcs@QKcFe^OSK[[M__SIK]uGcDiVKMEWwMYFOduOEMcFmZQBeMYCq@AgS@·pSAeJUTERa_gGGOUQMSeGPYMYaAGSDOQKRiKEFYEUXIIOPYG]JKOEqEKWWeQOO[M}KiMFKSc_YJA`MHBlqtsNaZYHWCWIKSPWGGoB]PG\\MZgLIVA^gPONY`EPBlXZj\\LLYZ}@UJDTmN@RPFQRQlcLsEgRO@iYOCoBQ]mGKBYOYGUnMNKQBw`ZWD_GYMYAWhCiIOUDgCOUIoKeK_ASLLXGdWCqYCKeGOM_LAJULOMMRYCcOcJGMSGBIYCDG]Q"]],"encodeOffsets":[[[126558,42490]]]}},{"type":"Feature","properties":{"adcode":210600,"name":"丹东市","center":[124.383044,40.124296],"centroid":[124.40518,40.544775],"childrenNum":6,"level":"city","parent":{"adcode":210000},"subFeatureIndex":5,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@bJA\\NENUKWHMhJHZNNTSvH|lHLAl\\PFK\\BZeRAVHdBbRb@nKjEE@PC`SO¨TfPLHIWuH]L@\\D¤N\\bNp`BzT\\FT\\ZxNfET^OB@`RLd@\\VlRAadzJjUfaHONBV\\nvpXLbl\\TR@dh@JXRNDL``P^TJDLlPTR~hJLxd|H²llTPfJxbZld|ff^`nTLNEB]PQfEjJbPPNTDbKZJ@WhDAdWBAP[AYJEbbpdLXP|XbDjJVPvZlPHtLnEtFNTFfNLtNLEf]Z@XNlPPCrq^FA\\MZHXTFt@J`D`f`bLTCAXPFX@`lhZPX@A[PO\\EJnARPWXVITXdtTb`ALVDPPCPYdSRaNUPQMkC]GoUUNRh[\\aIM]cISJgvBLnZNhCRMFiAWKAMZOBSOG}RQN@XVZM\\BTIRYLSKC]qDWHQCF_AOVKBL^RLKPaCOT[AJVORC\\MRs\\UGbYAkUwJmGSIOiNhyMMBSYQ@cZgLWCwJSAgH`e@oLgU}J]\\[Fc_BKaQkDQYAciIYXGMiImNKHcCuUC]kYOYMByXQAb]K}eSFQTeLu_]CKVLrCNSHcBWEKOYSHOKODYKS_AOJOY_MULojIDUK]EFM}G\\gVmTQDcfS@KWaGSA_da@KOMDcQQe@YOQF@RSFJW@_KgD_LOUBGeMacOC_RcGER_DMEiZaDURUOYDSKeJIMsFIIIaU@OSeKQf_OOBqf_NsJ_BOA}HMSD[KUVKZ]rgHQGQ[KU_AgIIREAMXATOEYJKT@PZEx_Q`S^ELIdcO[UHKbUFuKULMEMF[EG|ODMYkT]FYku\\]SgYgimCOOMEYL[SM[saWJW_YO_BKaMIM_aeX[XMbHLCBQa{_]MAIYSEMFcB_QBGeNiWGEKSbLgRAHKgBQJsMacCGFSMKBWqUPaP@CePCAOTRZAbWhN\\GjwSMMSFYLQdOHOE_FQVKH_@y"],["@@@TaIbI"],["@@TFvBHJORcFUEBISQJG"],["@@bX_`H"]],"encodeOffsets":[[[126484,40725]],[[126798,40742]],[[126686,40700]],[[127808,41374]]]}},{"type":"Feature","properties":{"adcode":210700,"name":"锦州市","center":[121.135742,41.119269],"centroid":[121.618541,41.461822],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":6,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@ZRFR\\dZXlVT@h~F^ZNAVH`NLF`QhKPB`WHGPhC\\rOLhL@EnC@GCVFJZq\\HOiBIGkB[IaA¯HsJevBX\\BFJDhcJWCUNETFpjPp¢r`V`BXXdRZKtDVXLHvFfBlWDU^Oh^CdRBRPtLXbfCDTGLU^@|`NATPN@LLr`hNKN\\PRPERVltÌ^CXv`VHFBdPdROdLCNTOLDP`tPEbxUFBhTALMdTAhNTbHA`HHIRR^jVGLwBUDF^OEY\\UPeRDH]HWPwVCdDTKZSP@T~JC\\GIZFHITDTSFOdB^MdFV[l]PRTAJ]CE\\WPLT]DET\\FINaCPZXLSNRNaBGHaO[­qgGkW_OI_FWcaAQImLMORM[BSiYFo]FKa[YCKHAOiaBSOIgIULOEKQNOseaCNCCUeKQDQKFMeDPKkY@KQSOCOTMlAa[UYYGqhgHqSA]RUIksiDcCOTqH§C_C@SYGKMOA@[IGP]@SYEQJ_SEccBBXKXa\\gJmAgS]AkPKPTJBnMFqAGJfM_JGWBSW[LQXS_RAEU[@QIOJ_[GTMOUJSY@SOAaQBKY[IJYQuFJLGJIOMJOUcQaBQEOQ[HOAC_PaskBGcGGMS@CKSFQGIWBWI]PIMSGJa@BuC]N[Y@KI]POKB[SMUXEXOJMIV__UQBYcQCCMNAIUU@M_HIOYFaHKKSWGI[JG`EFMP@LYK@cMOAOSUE@Q^APFTOXEJOIMNCTRLCReUWHQbGBUhKRSRBPRt^XGPMXBDUUGVUJF`KPLLqJQK{DQTKTHfIEIVM`Dz^Ca_KsJ@A_IAN]PP@ORDFSYKZKOQJMEmU_QIGUBSl«bJZC^JZ@SdVJPRDVbAZ|fNnBTEmØ@¬SĄWBªBdEhaPUzC"]],"encodeOffsets":[[[124473,41831]]]}},{"type":"Feature","properties":{"adcode":210800,"name":"营口市","center":[122.235151,40.667432],"centroid":[122.456202,40.391795],"childrenNum":6,"level":"city","parent":{"adcode":210000},"subFeatureIndex":7,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@dW`s@SMGF_VS^AZNpJLLPGVFJWPARaLHz@`WdJdQTaXGDOhDZRXZLQXM@cTI@IVWJ@fXnLdC\\[`EvLDI`JBGajWjGHQVMCPh\\lETLWTN\\CN]CJbEHkJANRTbCNX]NM`T^XINDXQPL|EVVVCnHPGR\\EJP\\TLT\\FjXXDfIHGZ@DRRRVA`JNTSbLH`rRLFVZTFZKbKBG\\MRCTTlAdTZrXbZC\\JbEnJZRNtBfTFPKzZ\\_T]ngN[ZkRcBcSaAOJsJYjI@IXSRuAwPYESHcZWBYOaDEUQB@Ts^fDNLHXSPPFBRLVTHDRoISOCJYPAb\\R^\\A|URFgE[TUFJtGDJfiPBPOJBR[AeJHR^X@NSH@bV`F\\cNo@_HU@KQkEaKUFMK@S[AUPcUEWWDDRGHSEI_wsYLU@uOGQ[DihMDKQFePQGQPmmy[IMZShOihQ\\OZEF]OWNGDhANO@MwYU@EJuJURMK_\\SDOIESDWK[LQCScs@YbuĂËBI[ICI\\iZDlGCOWJBAgh@RQDMmk}POEE_XqAMM@iLEWTU]MWAabWDYOIWJOxSaYUUS@Y`QDWGkHY_ñCGI^RWlgpANcAK]i_GgVMM"]],"encodeOffsets":[[[124881,41092]]]}},{"type":"Feature","properties":{"adcode":210900,"name":"阜新市","center":[121.648962,42.011796],"centroid":[121.961888,42.282968],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":8,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@OHuhMEGRSTeDSRMAYLGZ_@aGmAqDySOLVUhLTYPJaJe@¯NGEMICWJMNg@IXYÄKhHFe_KSg[QiOGKAoAgWMB@PSJYEGR£LCPaRELYRiJJkEIEoOCBPKFcISFAImJMLW@YLYDIVeG@TWFUGAOmIIMwLKSMICLWHKAEYiBEKLYCKUH[UJga@CM`@BEaMh]SILYU@EJQ@VQ@[e_aMAi[XG[OGERQFQQKi]IHTGLUOQWeIIGYCkwYWmQcFOEgdBJQjSGodERRPELcMBM[IBKQIcHoO[RQQSTcHWSFCgOaCUVO@DOKCoAEG@gsRcU]KaGMGTMOMBQO]_WgOWHHKoK]@GSyWDOGS]SgOHIKQ]AWg_AEHaKesgPaMNIUILM\\MRUBWK]HI@YbkBUJMNsSQO}iYCOPiFYIYUcDOZCjBJItQX\\@zUPU\\tUrK|ONKFeWS[{QKJcSQeHIrBNEAmSILOlO^BhTnBhIb[LWAWdAFd`TRIZF@TO^JH@\\PBLNZH@T`D¨DrGPSdDjCltVJ^QBrThGrgZHVZb\\kBSNDPTPLR@lZOLfCENRLRCfLDVMDbDtfMPLRPFVKhJPJATjbBPLGZDb\\ELp^ZETj\\AQNNPnKRJbBXd`EPJ`lXhH®r\\bPEX\\AGHLNbKÄ|\\ÀrKdV@NJLGHLRBLIbXXhAHZZBp\\LP`VXBh^ZA~HDHO`W@OLN\\QBONGVUCII[HGNJP_CNZPDKPBNKZFFKhPRM@^PNV@dIRBFfLFAPJLnZLEPJTXNDGP`MTHNqTUIKDYCUXiZGXJHeHCAXm`YDQRFRdXTBp`^MjEFD"]],"encodeOffsets":[[[125788,43744]]]}},{"type":"Feature","properties":{"adcode":211000,"name":"辽阳市","center":[123.18152,41.269402],"centroid":[123.251133,41.184819],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":9,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@SDcKNSGMjSl][XY@K^O¸UCE`CPDNIRHBMpWPBCRV^`RO^R`P@VZSLRNTGVJFTVZFbKXX\\CH[^D`dbDpSIMLQZDpMVNRABMTEPaXGQaNEIQJcCKTHPMT@XN^EJIP@DMIYLAdWIMRSkSQ@KOZ[UaUIDQ]DaAUIqLoK]QI[\\gAOMK{I\\aBQg[MYP[KYHSfHXGlUBI_caSEWDQX_`]|]LY\\VxYhbD\\C\\ZfJVJTXdPtEbJfAfXR`PJfGZ@hLvDlJrVLVC\\NT~GPBn`HfVJLTCLRX^NVlSXRTIBIFRVDApVD^NJTUTODU^@TSbHbTT_fUDBTIXSPI\\iHT\\W\\FP`ZHOb@\\IRC^KFCXPdCRMFHfKNFhKLFRUJO^ETln@VQRRMhSNUJgW]KeVWWcHQIW_gFQRUKSFBRYNSZSK]LARgI@RQCeHAOUBUXcJU@IZuBcD@V_PALc@[SLKKGKHY@YY[DQCMTHPgHHNCjTHVhiPIUka@SQaHCWMiEQU[uMMSCQRGW[XGDNVEKO@SaUsVASJCEQJEKO]NCGVC__bI]Uw@KJSOOT[QBiQaIIMc@MMQR_aCmS@MKYALO]MUQN]OKIUaMCSOK@aFKSUmCGOUE"]],"encodeOffsets":[[[125566,42189]]]}},{"type":"Feature","properties":{"adcode":211100,"name":"盘锦市","center":[122.06957,41.124484],"centroid":[121.999309,41.06851],"childrenNum":4,"level":"city","parent":{"adcode":210000},"subFeatureIndex":10,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@HSWaLKdTNXzJj@RWZE@XHJNhD\\JH`TSND@\\tfPThSJQOMJ[mdEARSCUUmL`}vQ¢Dri`IDrNVR`JL\\CXFTPJTC`[NLVQvIFIV@xZ@NMPgBCMHPXE^YF[PgRjgPYTJNz\\nnOHROREfLRNCjg\\CHRvPV@ZKxtJ`TFHGCQXCFX[HLRQRZEXFI\\ZVAHkP@PVEhNLVGD]MGPdZPAZUTC@TNFPQLB\\jQTK`JfBxGN]V@fY^Dt[DK^DL`ZbBVNHRhBXDddrfOHcBKOJAS]PggEOaMOUeERK[OB}MQVWAwPW^SNtN\\LLNAfJbT\\F`PZERPNC\\FJhY\\DZQNPRKDQUOFOQ[LMgMq_KKM@SOMB{_]@KVSHCeDWasKQOQADcg]]PCVkXeAuEKGUWsCYLcQWW_A_U¡qoiOEoFSVMXDdICgEI[AAWfutI°GbB\\JlAJHjAGPr[IYUED@HmD@FgKPK[qgDHOXGA_LORgE_MKG_BUYME]g}S@kUYW[cEQYQ"]],"encodeOffsets":[[[124473,41831]]]}},{"type":"Feature","properties":{"adcode":211200,"name":"铁岭市","center":[123.844279,42.290585],"centroid":[124.176584,42.648938],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":11,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@XJZ\\|`LJHtCjW\\JVIMUVE@fLh@TPLvzfXD`PKpUTAdF`GvFhRVCJeNE@MTQIMFOGK^AfRrBJMRFdTCVdBrVLLRDr`¦XnP~QZDLbdBRa\\O`QTWjlbXPZHlZbOjJTf@XKpFLCQW@MnWZ@fHbEdPZ@NVfFXJXKXDVjSLCbOCKVHRTT^LjGBNKVInFRY~ALL\\CPWRIIYdGVXLM^LO^NRh@ZHJRIL@dlPJJbNANj\\RBEXgTaACFXHFNRAANm`VPA`^^MjVNKNVLETUF]@SIMHaQSD@JeTRjKPBLcHKNmGANfNHPU^CNQNXLLCVfaNFRJAJZIPOBIjgJMAcZ_AA[OUQKUFYAKPCVOX@jGVDZOfNHILBNPL@TNHCPJTIFJ`CNNPKHHXULGVHBKXWX@TfCIN@VVFR\\TLEhINFVXNB\\[DOO_K_PgEEIWCKJaK@SOQgWGY_KiDoYQMWoH[AUKYUMASMFcEA]JEaM@M]GKMDOUW}meEKgKJcD[QkK[YNeOIYFDvQ\\ODFPMLMMWJDIV@V^TNETLFNZ@BHdJTT@fWNOTiIc@oJYZ]RNN|l´¨ILqT_`e^mLU^iXKKULPHaPSZPTGNTVMTDHM\\OE]NSG[BENO@E^aUSBWGKNGK[TKE_JGO]@F`KLJPIHY@HPIH@mIUMxKPsnFFcToTWE_HJdQVuLCJUJETJPB\\b^]PFDWREEYLOCkXKNWSY@EHqYNMASQUJG]YoS@YOCFKKMRMSALI@[QOrDQGDOOAAOTKUGLOVAGM_AFYOGBYRGMKYLOMWEASTcMIRWgEWOTgT@FYQMSBAQJOU]OKF[QIHOKWHUKSSCU[QCDI\\OcSGOSHJWGINEIKS@AMUDJcYEOOR_XS`CDKh[EMYCEUZKBW]OASdIFGe[PK@QXQYKD_NWMMTUIMYFQMROAOSAES[Y@GXYXKY[\\IHUQ@\\[VNPT^I@UMSLOZMtUDKYIVGVYlBNSU@H]`BD[XDNIIOVCJLbIKU_AYggILkJVTKRBZSCSFgSESODFUO_qFASWHIOOBIKWEOQYLYcYMcDKQe_BOpeMaHAS_bSJQXBLSXILSL@AcWoem_IQQGYPaWE_sRIVedAdXbA^SNBCuBQ^CfY`EfSXGVOBM^@`M`HvMBIlSPWX@ROEGxWFGNN@RJNTCDMNAI]LIGQYQQN_HQKAeLFDMfM"]],"encodeOffsets":[[[126761,42997]]]}},{"type":"Feature","properties":{"adcode":211300,"name":"朝阳市","center":[120.451176,41.576758],"centroid":[120.021858,41.516568],"childrenNum":7,"level":"city","parent":{"adcode":210000},"subFeatureIndex":12,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@kVLJgJOE]BQHCNuLEGcEMG_HOKTWQWaRGIJKWHKMMaC[OJOC_csKOScu_Za_aQ]Ei[G]UFMVMPHVECG[CV[UQMFgC]JMeSUBGKYIXUmAuTwa[BHOGOmW@SNEQWGPc@KSTMSCOTKWFKSG\\KdCRQWO[FoBoeWYyIIK@_gc]akgGUPsNOMMcQQUQKqBwVQ@BbWZVTDbNDNTOASJRPFbG^NNqSKZWULGN@j[\\aJMNLdGrKXu^HVM^[JUXLVEJaPAXYdq\\EN@lITD\\`lDZGvKLC_DCGmFkEWVWCARaKod@OVOHSEOrqDCNQIO\\WIAJWCD^\\XGLZHLN@pwPIErG_QgMK}][GMWSAMKmCgQUH]EUKSWk[kGKOE]IOeaIYSIXY^BXE@UNGPebIEeXSAVQVEJUNMAWK_JGCcIEA]ueWKQLW@UKMDKTEJQOUFMY]HYNIQ]BMSaFEMs_SMYTWdOK[WMXCN[YOMSJaTWAcIMJcNHliDMdOfGNMVAhOFOOAPWIMWJUEGFWC]DNUKCRcXI@SX@TWBMM@L_AYs_KoH[WA_UuIY@ASlUIWOG\\yIWYJB\\QaSMuAcDYMBgLMD_ciW@GWK@@eWGyBESfSHKI]IIiQmqSMCMICkB[MW[MQFQIIQQEBLkAkRaAKFciSKA_JSVSRCIZGNS][IaO@kMqC{T[MIOBUKW@MOBLkC[SwMKAQcOE[KIFiZBHOVGDM^KPFTG_mXD`IlCVMLml[LQ\\CVQ^LlWLaRCNPXD\\QhFpX^VZHVET]Yiyi\\_A[JI`RNBlKr@JMVVHTTDLUXCfNANznT^ZXdTVD`C^L^VNZ@VLXxnIDTR^G`FVPTvXVJPGfNF^Gp_ZJpd|UTYTQ@@F]TU\\CNV@PPHZ`BPaEAXVJBRRXZA\\PLQb@bYJTTCNb\\DV\\ATM\\LDO`BTIRWvBZGTn`LLRZ@RYNKZJb`T`B\\RL@LPHLTKJIhAXQHIfUJLR`JP@LLzJJVbANO\\I\\ANUQKCOVCPYfPFbbPBVuT@LS@cWIEYaAFMSIFaVIbBNTJ\\TTjK\\RJ[TDZCVb@V\\@BX\\TDLPBNKFNTAQIoL@XcNCZFLPh\\TZENPHG\\D^ElDPjfjBTUjKPJDtpNNHX@TV`CZFLlNH`dANIXF\\^XFE]zFRPVFdONHMDJNIPWFSPOE]B@RVFPTPBdNL@KZO@EN_FIHJ\\XHLTGLEbPZGJN`V@JVMBDNRDZdRA`VU`NJPIFWVWTNA\\PL^OLJZ@M\\D^Avb@HINTOJJ^AXJXRHTEDLT@HNdHAHtlObD`PB\\GPRRFbAdRPVNIJPHIIKvEZRJIZ\\ALbRPB@TTZVINPHS`\\PIRJ\\@FVQB`WTKRX\\ATXIHN`TRIdRL\\|XTEfML{PqLsV[OVyV[@WsRIJiAYDCPVdJZEZOjDPjZP~TRMtINAVal@ZGJL^AXQV[NKN"]],"encodeOffsets":[[[123933,43258]]]}},{"type":"Feature","properties":{"adcode":211400,"name":"葫芦岛市","center":[120.856394,40.755572],"centroid":[120.21031,40.620597],"childrenNum":6,"level":"city","parent":{"adcode":210000},"subFeatureIndex":13,"acroutes":[100000,210000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@k¬ATHVRJV`FnINPRYLZLETQC@POOM^JBB`I@Lt`Dby]_CUNFJeJSGSLCRL|IRKrOK_LIEUVVHCVWAONWHs]OQQAQTgLAVaHGRVXQfKDSQMGcPUEQOyEF^WE[]WEMJcBG_kMEKDYU_@SGWMoMCsOIiLSViAieCOFkC]H[OGFMSYg[KOYEMDWdK@pRJSBEMMLOACK[SAW[@@UUaYDSCI\\[QiLSSI[MSaAUJEbTJENbBFZXJ@dKTS@UvOAaaOEeOZUDDPRLMV[B[JMPaBIUyIKKO@_IKQVIJeRGBWJgLIKSOG@KQKA[S_a_YIMLQZY@KQ_KSmYHuAQXSJ_ACP[KNBSU[[CMaSDISaZa@KR[OYBQWAQUIBWbFAOY_OG@OMU[DSVE^@@SRSZ{VocYIo`]HMEHeIOWUSuUO_E]HSQJCwmKW@UMY]U]K_DUCcSYWS]ymBMeMWDKVSCGSUUEOYU@SsjQtGBpLhBZC¢FfIdAZFZdbM^NrM\\QA]aMGODOf[HU^K^aESQQN{Q[Ic\\eCmdaNahSTgSMDKUSOs\\LRAfTJBJ_j_hYFRXBFKXPLgBcJYCINYKWgotgTEWaNMHURBbQXHRRPKVFR[TG]uNCP_VBvCnBl\\NTDdHVPLdJzFrLÈdGVBxl¸\\¬d¶zfvL¬E^DdV^j\\ZPB^GnBVTbLJVt`NR@lMRBPVJRTBLNGRjPzARNd`FZND`HRjx`pfJZHzLbM\\BR`PXFdGbH¦DVTdBZ^vInDNJFXObKH@MEQLDb`VAXKNWFKPLLDRZW^AHoZKLX"],["@@\\\\n@TJAjSL@JSAKJFUMESDB_YAKQ@SXM"],["@@LABTMQ"]],"encodeOffsets":[[[123935,41770]],[[123686,41445]],[[123510,41367]]]}}],"UTF8Encoding":true});
}));