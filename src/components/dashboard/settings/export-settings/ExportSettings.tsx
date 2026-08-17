import AudioSettings from './AudioSettings';
import ExportPresets from './ExportPresets';
import ExportPreview from './ExportPreview';
import FileSettings from './FileSettings';
import VideoSettings from './VideoSettings';

export default function ExportSettings() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-[1fr_350px] gap-2">
        <VideoSettings />
        <ExportPreview />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <AudioSettings />
        <FileSettings />
      </div>

      <ExportPresets />
    </div>
  );
}
