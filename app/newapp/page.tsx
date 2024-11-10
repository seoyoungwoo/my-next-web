"use client";

import { CatIcon } from 'lucide-react';
import { SendIcon } from 'lucide-react';

export default function Home() {
    return ( 
        <div className="flex justify-center items-center w-full h-[100dvh] bg-gray-300">
            <div className="max-w-sm w-full h-[100dvh] bg-white">
                <div className="flex justify-between bg-gray-500 px-4">
                    <span className="font-bold border border-white-500">yeongstagram</span>
                    <div className="flex items-center gap-1 border-2">
                        <button onClick={() => like()}>
                            <CatIcon className="w-6 h-6" />
                        </button>
                        <button onClick={() => DM()}>
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
        </div>
    </div>
    );
}

function DM() {
    prompt("보낼 DM 내용을 입력.")
}

function like() {
    alert("좋아요를 누르셨습니다.")
}