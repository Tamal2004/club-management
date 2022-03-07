import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import 'yup-phone';
import { Formik, Form } from 'formik';

import Button from '@components/Button';
import Field from './Field';
import Avatar from './Avatar';

// Types
import type { FormikConfig } from 'formik';
import type { MemberValues } from './types';

interface MemberFormProps {
    initialValues: MemberValues;
    onSubmit: FormikConfig<MemberValues>['onSubmit'];
    isEditing: boolean;
    onToggle?: MouseEventHandler<HTMLDivElement>;
    className?: string; // Overrides
}

const MemberFormSchema = Yup.object().shape({
    firstName: Yup.string().required('A name is required'),
    lastName: Yup.string().required('A surname is required'),
    phoneNumber: Yup.string()
        .required('A phone number is required')
        .phone('', false, 'Please enter a valid phone number'),
    avatarUrl: Yup.string().required('An avatar image is required')
});

const StyledForm = styled(Form)`
    display: grid;

    grid-template-columns: 1fr 60rem;
    grid-row-gap: 4rem;
    grid-template-areas:
        'first avatar'
        'last avatar'
        'phone avatar'
        '. avatar'
        '. save';
`;

const StyledField = styled(Field)`
    &#firstName {
        grid-area: first;
    }
    &#lastName {
        grid-area: last;
    }
    &#phoneNumber {
        grid-area: phone;
    }
`;

const SaveButton = styled(Button)`
    grid-area: save;
`;

const MemberForm: React.FC<MemberFormProps> = ({
    initialValues,
    onSubmit,
    isEditing,
    className
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={MemberFormSchema}
        >
            {({ handleSubmit, isValid, dirty }) => (
                <StyledForm onSubmit={handleSubmit} className={className}>
                    <StyledField
                        isEditing={isEditing}
                        initialValue={''}
                        id='firstName'
                        placeholder='Please enter your first name'
                        label='First Name'
                    />
                    <StyledField
                        isEditing={isEditing}
                        initialValue={''}
                        id='lastName'
                        placeholder='Please enter your last name'
                        label='Last Name'
                    />
                    <StyledField
                        isEditing={isEditing}
                        initialValue={''}
                        id='phoneNumber'
                        placeholder='Please enter your phone number'
                        label='Phone Number'
                    />
                    <Avatar isEditing={isEditing} id='avatarUrl' />
                    {isEditing && (
                        <SaveButton
                            role='button'
                            type='submit'
                            disabled={!dirty || !isValid}
                        >
                            Save
                        </SaveButton>
                    )}
                </StyledForm>
            )}
        </Formik>
    );
};

export default MemberForm;
