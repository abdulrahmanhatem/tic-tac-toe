import { useState, lazy, Suspense } from 'react';
const Modal = lazy(() => import('@mui/material/Modal'));
const Slider = lazy(() => import('@mui/material/Slider'));
const Switch = lazy(() => import('@mui/material/Switch'));

export default function Settings({settings,setSettings}) {
  const [open, setOpen] = useState(false);
  const [isSFXMute, setIsSFXMute] = useState(settings.isSFXMute);
  const [sFXVolume, setSFXVolume] = useState(settings.sFXVolume);

  return (
    <>
      <SettingIcon handleOpen={() => setOpen(true)}/>
      <Suspense fallback={<>Loading...</>}>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='modal'>
          <div className='modal-title'>
            <span>Settings</span>
            <span className='close' onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z" />
                </svg>
            </span>
          </div>
          <div className='modal-description'>
            <div className="modal-group">
                <div className="modal-option">
                    <span className='option-label'>
                        <span className='option-icon'></span>
                        Sound Effects
                    </span>
                    <span className='option-action'>
                    <Switch checked={!isSFXMute} onChange={() => {
                      setIsSFXMute(!isSFXMute)
                      setSettings({...settings, isSFXMute:!isSFXMute})
                      }}/>
                    </span>
                </div>
                <div className="modal-option">
                    <Slider size='small' value={sFXVolume} onChange={e => {
                      setSFXVolume(e.target.value)
                      setSettings({...settings, sFXVolume:e.target.value})
                      }} min={1} max={100}/>
                </div>
            </div>
          </div>
        </div>
      </Modal>

      </Suspense>
      
    </>
  );
}

export function SettingIcon({handleOpen}) {
    return (
        <span className='settings-icon' title="Settings" onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: ".fa-secondary{opacity:.4}" }} />
                </defs>
                <path
                    className="inner"
                    d="M192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                />
                <path
                    className="outer"
                    d="M489.6 191.2c6.9-6.2 9.6-15.9 6.4-24.6c-4.4-11.9-9.7-23.3-15.8-34.3l-4.7-8.1c-6.6-11-14-21.4-22.1-31.2c-5.9-7.2-15.7-9.6-24.5-6.8l-55.7 17.7C359.8 93.6 345 85 329.2 78.4L316.7 21.3c-2-9.1-9-16.3-18.2-17.8C284.7 1.2 270.5 0 256 0s-28.7 1.2-42.5 3.5c-9.2 1.5-16.2 8.7-18.2 17.8L182.8 78.4c-15.8 6.5-30.6 15.1-44 25.4L83.1 86.1c-8.8-2.8-18.6-.3-24.5 6.8c-8.1 9.8-15.5 20.2-22.1 31.2l-4.7 8.1c-6.1 11-11.4 22.4-15.8 34.3c-3.2 8.7-.5 18.4 6.4 24.6l43.3 39.4C64.6 238.9 64 247.4 64 256s.6 17.1 1.7 25.4L22.4 320.8c-6.9 6.2-9.6 15.9-6.4 24.6c4.4 11.9 9.7 23.3 15.8 34.3l4.7 8.1c6.6 11 14 21.4 22.1 31.2c5.9 7.2 15.7 9.6 24.5 6.8l55.7-17.7c13.4 10.3 28.2 18.9 44 25.4l12.5 57.1c2 9.1 9 16.3 18.2 17.8c13.8 2.3 28 3.5 42.5 3.5s28.7-1.2 42.5-3.5c9.2-1.5 16.2-8.7 18.2-17.8l12.5-57.1c15.8-6.5 30.6-15.1 44-25.4l55.7 17.7c8.8 2.8 18.6 .3 24.5-6.8c8.1-9.8 15.5-20.2 22.1-31.2l4.7-8.1c6.1-11 11.3-22.4 15.8-34.3c3.2-8.7 .5-18.4-6.4-24.6l-43.3-39.4c1.1-8.3 1.7-16.8 1.7-25.4s-.6-17.1-1.7-25.4l43.3-39.4zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                />
                </svg>
        </span>
    )
}