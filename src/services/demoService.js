const BaseURL = "http://api.itrc.site";
const AbnormalApi = BaseURL + ":50000";
const QnaApi = BaseURL + ":50001";
const DeepscanApi = BaseURL + "50002";
const SelfharmApi = BaseURL + "50003";
const FalldownApi = BaseURL + "50004";
const Available = [AbnormalApi, FalldownApi];
const OnStudy = [QnaApi, DeepscanApi, SelfharmApi];

export {
    Available,
    OnStudy,
    AbnormalApi,
    QnaApi,
    DeepscanApi,
    SelfharmApi,
    FalldownApi,
};
