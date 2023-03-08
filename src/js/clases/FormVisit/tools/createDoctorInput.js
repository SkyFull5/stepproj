import { inputDoctorVisit } from '../utils/index.js';

export const createDoctorInput = ({ doctor = '', params = '', value }) => {
    const doctorInput = inputDoctorVisit
        .map(item => {
            if (item.value === (doctor || value)) {
                return item.content.map(content => {
                    if (!!params) {
                        content.value = params[content?.name];

                        if (content.type === 'radio') {
                            content.content.forEach(changeChecked => {
                                if (content.value === changeChecked.value) {
                                    changeChecked.checked = 'checked';
                                }
                            });
                        }
                    }

                    return content.renderContent(content);
                });
            }
        })
        .find(item => !!item)
        ?.join('');

    return !!doctorInput?.length ? `<div class='doctor-inputs'>${doctorInput}</div> ` : '';
};
