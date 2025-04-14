percent="100%"
progressive=False
chunk="None"

question="

   We want make a method called FromJson, that should take a json and convert it back to PostLandingLogCorrelationCommand object



   ~> PostLandingLogCorrelationCommand.cs
   ~> PostLandingLogCorrelationWellboreCommandModel.cs
"

file_list="
    
"

search_dir="C:\FEGeosteeringUI\Addin_FEGeosteeringAdvisory\Sources"
echo "$question" > "question.txt"
python 'c:\Users\mohamus03\.vscode\extensions\undefined_publisher.windows-code-prompt-0.0.7\chat-gpt\chat-gpt.py' $percent "$(echo $question)" $progressive $search_dir $(echo "$file_list")