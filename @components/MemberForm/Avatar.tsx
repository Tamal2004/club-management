import React, {
    ChangeEvent,
    ChangeEventHandler,
    useCallback,
    useRef,
    useState
} from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { Theme } from '@theme/theme';

interface AvatarProps {
    isEditing: boolean;
    id: string;
}

const AvatarImage = styled.img`
    grid-area: avatar;
    display: flex;

    width: 100%;
    height: 100%;

    border-radius: 2rem;
    overflow: hidden;

    &::before {
        content: '';
        width: 0;
        padding-bottom: 100%;
    }
`;

const EditButton = styled.button`
    grid-area: avatar;
    cursor: pointer;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    ${({ theme }: { theme: Theme }) => theme.typography.body};

    background-color: ${({ theme }: { theme: Theme }) =>
        theme.colors.grey.main};

    &:hover {
        background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.grey.light};
    }

    &:active {
        background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.grey.dark};
    }

    transition: background-color 300ms;
    opacity: 0.8;
`;

const Avatar: React.FC<AvatarProps> = ({ isEditing, id }) => {
    const [{ value }, , { setValue }] = useField(id);

    const [key, setKey] = useState(new Date().getTime());
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(() => {
        if (inputRef.current) inputRef.current.click();
    }, [inputRef]);

    const handleFile: ChangeEventHandler<HTMLInputElement> = useCallback(
        ({ target: { files } }) => {
            if (files) {
                const file = files[0];

                const blob = URL.createObjectURL(file);

                setValue(blob);
            }
            setKey(new Date().getTime());
        },
        [setValue, id]
    );

    return (
        <>
            {value && <AvatarImage src={value} alt='Avatar Image' />}
            {isEditing && (
                <EditButton type='button' onClick={handleClick}>
                    Update Image
                </EditButton>
            )}
            <input
                key={key}
                accept='image/*'
                type='file'
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={handleFile}
            />
        </>
    );
};

export default Avatar;
