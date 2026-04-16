import { useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  videoId: string;
  title?: string;
}

export default function VideoTestimonial({ videoId, title = 'Depoimento de aluno da King of Languages' }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
      <button onClick={() => setPlaying(true)} className="w-full h-full border-0 p-0 cursor-pointer bg-transparent group" aria-label={`Reproduzir: ${title}`}>
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/60 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors">
          <Play size={24} fill="white" color="white" />
        </span>
      </button>
    </div>
  );
}
