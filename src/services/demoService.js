const BaseURL = "http://43.202.202.125";
const AbnormalApi = BaseURL + "/api/abnormal";
const QnaApi = BaseURL + "/api/qna";
const DeepscanApi = BaseURL + "/api/deepscan";
const SelfharmApi = BaseURL + "/api/selfharm";
const FalldownApi = BaseURL + "/api/falldown";
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
