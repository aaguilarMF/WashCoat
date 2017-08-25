var Models = {};
Models.AddWashCoat = function (
    /*ID,*/ BatchID, LabLogNumber, Solids500C, Pt, Pd, Rh, Zr, Ce, Ni, Ba, La, Ir, pH, Y, Nd, Pr, Hf, Temperature, Viscosity_Fresh, Viscosity_Aged, Arizona_Solids, WashCoatLoading
    ) {
    return {
        //ID: ID,
        BatchID: BatchID,
        LabLogNumber: LabLogNumber,
        Solids500C: Solids500C,
        Pt: Pt,
        Pd: Pd,
        Rh: Rh,
        Zr: Zr,
        Ce: Ce,
        Ni: Ni,
        Ba: Ba,
        La: La,
        Ir: Ir,
        pH: pH,
        Y: Y,
        Nd: Nd,
        Pr: Pr,
        Hf: Hf,
        Temperature: Temperature,
        Viscosity_Fresh: Viscosity_Fresh,
        Viscosity_Aged: Viscosity_Aged,
        Arizona_Solids: Arizona_Solids,
        WashCoatLoading: WashCoatLoading
    }
};