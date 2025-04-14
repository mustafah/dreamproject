        
        
        private const int DefaultIntervalSizeMd = 10;
        public double SelectionStart
        {
            get => GetOrDefault(SliderMinimum);
            set
            {
                RaiseAndSetIfChanged(value);
            }
        }
        public double SelectionEnd
        {
            get => GetOrDefault(SliderMaximum);
            set
            {
                RaiseAndSetIfChanged(value);
            }
        }

        public ViewModel<MarkerInterpretationModel> SelectedMarkerInterpretation
        {
            get { return GetOrDefault<ViewModel<MarkerInterpretationModel>>(); }
            set { RaiseAndSetIfChanged(value); }
        }
        public ViewModel<WellMarkerModel> SelectedWellMarkerModel
        {
            get { return GetOrDefault<ViewModel<WellMarkerModel>>(); }
            set { RaiseAndSetIfChanged(value); }
        }
        public ViewModel<WellboreModel> SelectedTargetWellbore
        {
            get => GetOrDefault<ViewModel<WellboreModel>>();
            set => RaiseAndSetIfChanged(value);
        }
        [IgnoreDataMember]
        public ILiveModelCollection<WellboreModel> TargetWellbores
        {
            get => GetOrDefault<ILiveModelCollection<WellboreModel>>();
            set => RaiseAndSetIfChanged(value);
        }
        [IgnoreDataMember]
        public ILiveModelCollection<PropertyTemplateModel> TargetWellboreLogTypes
        {
            get => GetOrDefault<ILiveModelCollection<PropertyTemplateModel>>();
            set => RaiseAndSetIfChanged(value);
        }

        [IgnoreDataMember]
        public ILiveModelCollection<PropertyTemplateModel> OffsetWellboreLogTypes
        {
            get => GetOrDefault<ILiveModelCollection<PropertyTemplateModel>>();
            set => RaiseAndSetIfChanged(value);
        }

        public double SliderMinimum
        {
            get { return GetOrDefault<double>(); }
            set { RaiseAndSetIfChanged(value); }
        }
        public double SliderMaximum
        {
            get { return GetOrDefault<double>(); }
            set { RaiseAndSetIfChanged(value); }
        }
        public double IntervalSizeMd
        {
            get { return GetOrDefault<double>(); }
            set { RaiseAndSetIfChanged(value); }
        }